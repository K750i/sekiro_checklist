import React, {Component} from 'react';
import NavigationBar from './components/NavigationBar';
import IndexArea from './components/IndexArea';
import AreaContainer from './components/AreaContainer';
import About from './components/About';
import Jumbo from './components/Jumbo';
import dataStr from './assets/data';
import {areas} from './assets/data';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('currentProfile')) {
      this.state = {
        data: this.loadMergeData(localStorage.getItem('currentProfile')),
        currentProfile: localStorage.getItem('currentProfile'),
        areas: areas,
        completionStatus: {},
      };
    } else {
      this.state = {
        data: JSON.parse(dataStr).default,
        completionStatus: {},
        areas: areas,
        currentProfile: 'default',
      };
    }
  }

  updateTaskCounter() {
    const completed = {};

    Object.keys(this.state.data).forEach(area => {
      completed[area] = this.state.data[area].reduce(
        ([done, total], v) => [v.done ? ++done : done, ++total],
        [0, 0],
      );
    });

    this.setState({completionStatus: completed});
  }

  toggleCompletion = (id, area) => {
    const newState = {...this.state.data};
    newState[area].map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });

    this.setState({data: newState});

    this.persistState();

    this.updateTaskCounter();
  };

  persistState() {
    localStorage.setItem(
      'appStateSource',
      JSON.stringify(this.storageUpdateHelper()),
    );
    localStorage.setItem('currentProfile', this.state.currentProfile);
  }

  storageUpdateHelper = () => {
    const doneObj = {};

    Object.keys(this.state.data).forEach(area => {
      doneObj[area] = this.state.data[area].map(obj => ({done: obj.done}));
    });

    return {
      ...JSON.parse(localStorage.getItem('appStateSource')),
      [this.state.currentProfile]: doneObj,
    };
  };

  loadMergeData = profileName => {
    const mergedObj = {};
    const parsedSourceObj = JSON.parse(dataStr).default;
    const loadedObj = JSON.parse(localStorage.getItem('appStateSource'))[
      profileName
    ];

    // merge the saved object with the full object
    Object.keys(parsedSourceObj).forEach(area => {
      mergedObj[area] = parsedSourceObj[area].map((obj, i) => {
        const temp = loadedObj[area];
        if (temp) {
          return {...obj, ...temp[i]};
        } else {
          return {...obj};
        }
      });
    });

    return mergedObj;
  };

  addProfile = name => {
    // reset state to original
    this.setState(
      {data: JSON.parse(dataStr).default, currentProfile: name},
      () => {
        localStorage.setItem('currentProfile', name);
        localStorage.setItem(
          'appStateSource',
          JSON.stringify(this.storageUpdateHelper()),
        );

        this.updateTaskCounter();
        this.forceUpdate();
      },
    );
  };

  deleteProfile = name => {
    const stateSource = JSON.parse(localStorage.getItem('appStateSource'));

    if (!stateSource) return;
    // create a new obj without the selected profile to re-save into localStorage
    const newStateSource = Object.keys(stateSource).reduce((o, v) => {
      if (v !== name) {
        o[v] = stateSource[v];
      }
      return o;
    }, {});
    localStorage.setItem('appStateSource', JSON.stringify(newStateSource));

    // if there is remaining profile, load the last one from the list
    const list = Object.keys(newStateSource);
    if (list.length >= 1) {
      this.changeProfile(list[list.length - 1]);
    } else {
      // otherwise load a default profile
      this.setState(
        {
          data: JSON.parse(dataStr).default,
          completionStatus: {},
          areas: areas,
          currentProfile: 'default',
        },
        () => {
          this.persistState();
          this.forceUpdate();
        },
      );
    }
  };

  changeProfile = name => {
    this.setState(
      {
        data: this.loadMergeData(name),
        currentProfile: name,
      },
      () => {
        this.updateTaskCounter();
        this.persistState();
      },
    );
  };

  componentDidMount() {
    this.updateTaskCounter();
  }

  render() {
    const areaList = this.state.areas.map(area => {
      return (
        <IndexArea
          key={area.id}
          areaName={area.name}
          link={area.link}
          status={this.state.completionStatus[area.id]}
        />
      );
    });

    const areaSection = this.state.areas.map(area => {
      return (
        <AreaContainer
          areaObjectives={this.state.data[area.id]}
          areaName={area.name}
          link={area.link}
          status={this.state.completionStatus[area.id]}
          toggleCompletion={this.toggleCompletion}
          key={area.id}
        />
      );
    });

    return (
      <section>
        <Router>
          <NavigationBar
            profiles={
              localStorage.getItem('appStateSource')
                ? Object.keys(
                    JSON.parse(localStorage.getItem('appStateSource')),
                  )
                : ['default']
            }
            selectedProfile={this.state.currentProfile}
            addProfile={this.addProfile}
            changeProfile={this.changeProfile}
            deleteProfile={this.deleteProfile}
          />
          <Container>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <Jumbo areaList={areaList} />
                    <main>{areaSection}</main>
                  </>
                )}
              />
              <Route path="/about" component={About} />
            </Switch>
          </Container>
        </Router>
      </section>
    );
  }
}
