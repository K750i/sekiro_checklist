import React, {Component} from 'react';
import NavigationBar from './components/NavigationBar';
import IndexArea from './components/IndexArea';
import AreaContainer from './components/AreaContainer';
import Faq from './components/Faq';
import Jumbo from './components/Jumbo';
import Footer from './components/Footer';
import playthroughStr from './assets/data';
import {areas} from './assets/data';
import {
  updateTaskCounter,
  toggleCheckbox,
  persistState,
  storageUpdateHelper,
  loadMergeData,
  collapseSection,
} from './assets/exportedFunctions';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateTaskCounter = updateTaskCounter.bind(this);
    this.toggleCheckbox = toggleCheckbox.bind(this);
    this.persistState = persistState.bind(this);
    this.storageUpdateHelper = storageUpdateHelper.bind(this);
    this.collapseSection = collapseSection.bind(this);

    if (localStorage.getItem('currentProfile')) {
      this.state = {
        data: loadMergeData(
          JSON.parse(playthroughStr).default,
          localStorage.getItem('currentProfile'),
        ),
        currentProfile: localStorage.getItem('currentProfile'),
        areas: areas,
        completionStatus: {},
        playthroughCollapse: localStorage.getItem('collapse1')
          ? JSON.parse(localStorage.getItem('collapse1'))
          : {},
      };
    } else {
      this.state = {
        data: JSON.parse(playthroughStr).default,
        completionStatus: {},
        areas: areas,
        currentProfile: 'default',
        playthroughCollapse: {},
      };
    }
  }

  toggleCompletion = (id, area) => {
    const newState = this.toggleCheckbox({...this.state.data}, id, area);

    this.setState({data: newState});

    this.persistState(this.state);

    this.setState(this.updateTaskCounter(this.state.data));
  };

  addProfile = name => {
    // reset state to original
    this.setState(
      {data: JSON.parse(playthroughStr).default, currentProfile: name},
      () => {
        localStorage.setItem('currentProfile', name);
        localStorage.setItem(
          'playthroughChecklist',
          JSON.stringify(this.storageUpdateHelper(this.state.data, name)),
        );

        this.setState(this.updateTaskCounter(this.state.data));
        this.forceUpdate();
      },
    );
  };

  deleteProfile = name => {
    const playthroughList = JSON.parse(
      localStorage.getItem('playthroughChecklist'),
    );
    const collapse1Obj = JSON.parse(localStorage.getItem('collapse1'));

    if (!playthroughList) return;

    delete playthroughList[this.state.currentProfile];
    localStorage.setItem(
      'playthroughChecklist',
      JSON.stringify(playthroughList),
    );

    if (collapse1Obj) {
      delete collapse1Obj[this.state.currentProfile];
      localStorage.setItem('collapse1', JSON.stringify(collapse1Obj));
    }

    // if there is remaining profile, load the last one from the list
    const list = Object.keys(playthroughList);
    if (list.length >= 1) {
      this.changeProfile(list[list.length - 1]);
    } else {
      // otherwise load a default profile
      this.setState(
        {
          data: JSON.parse(playthroughStr).default,
          completionStatus: {},
          areas: areas,
          currentProfile: 'default',
          playthroughCollapse: {},
        },
        () => {
          this.persistState(this.state);
          this.forceUpdate();
        },
      );
    }
  };

  changeProfile = name => {
    this.setState(
      {
        data: loadMergeData(JSON.parse(playthroughStr).default, name),
        currentProfile: name,
        playthroughCollapse: JSON.parse(localStorage.getItem('collapse1')),
      },
      () => {
        this.setState(this.updateTaskCounter(this.state.data));
        this.persistState(this.state);
      },
    );
  };

  handleCollapse = obj => {
    const newState = this.collapseSection(
      {...this.state.playthroughCollapse},
      this.state.currentProfile,
      obj,
    );

    this.setState({playthroughCollapse: newState}, () =>
      localStorage.setItem(
        'collapse1',
        JSON.stringify(this.state.playthroughCollapse),
      ),
    );
  };

  componentDidMount() {
    this.setState(this.updateTaskCounter(this.state.data));
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
          collapse={
            this.state.playthroughCollapse[this.state.currentProfile] || {}
          }
          handleCollapse={this.handleCollapse}
        />
      );
    });

    return (
      <section id="container">
        <Router>
          <NavigationBar
            id="top"
            profiles={
              localStorage.getItem('playthroughChecklist')
                ? Object.keys(
                    JSON.parse(localStorage.getItem('playthroughChecklist')),
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
                    <Jumbo
                      areaList={areaList}
                      status={this.state.completionStatus}
                    />
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
