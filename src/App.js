import React, {Component} from 'react';
import NavigationBar from './components/NavigationBar';
import IndexArea from './components/IndexArea';
import AreaContainer from './components/AreaContainer';
import Faq from './components/Faq';
import Jumbo from './components/Jumbo';
import Footer from './components/Footer';
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
        savedCollapse1: JSON.parse(localStorage.getItem('collapse1')),
      };
    } else {
      this.state = {
        data: JSON.parse(dataStr).default,
        completionStatus: {},
        areas: areas,
        currentProfile: 'default',
        savedCollapse1: {},
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
    localStorage.setItem(
      'collapse1',
      JSON.stringify(this.state.savedCollapse1),
    );
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
    delete stateSource[this.state.currentProfile];
    localStorage.setItem('appStateSource', JSON.stringify(stateSource));

    const collapse1Obj = JSON.parse(localStorage.getItem('collapse1'));
    delete collapse1Obj[this.state.currentProfile];
    localStorage.setItem('collapse1', JSON.stringify(collapse1Obj));

    // if there is remaining profile, load the last one from the list
    const list = Object.keys(stateSource);
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
        savedCollapse1: JSON.parse(localStorage.getItem('collapse1')),
      },
      () => {
        this.updateTaskCounter();
        this.persistState();
      },
    );
  };

  handleCollapse1 = obj => {
    const temp = {...this.state.savedCollapse1};

    temp[this.state.currentProfile] = {
      ...this.state.savedCollapse1[this.state.currentProfile],
      ...obj,
    };

    this.setState({savedCollapse1: temp}, () =>
      localStorage.setItem(
        'collapse1',
        JSON.stringify(this.state.savedCollapse1),
      ),
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
          profile={this.state.currentProfile}
          savedCollapse1={
            this.state.savedCollapse1[this.state.currentProfile] || {}
          }
          handleCollapse1={this.handleCollapse1}
        />
      );
    });

    return (
      <section id="container">
        <Router>
          <NavigationBar
            id="top"
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
          <Container id="body">
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
              <Route path="/faq" component={Faq} />
            </Switch>
          </Container>
        </Router>
        <Footer />
      </section>
    );
  }
}
