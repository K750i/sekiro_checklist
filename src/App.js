import React, {Component} from 'react';
import NavigationBar from './components/NavigationBar';
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';
import AllTask from './components/AllTask';
import About from './components/About';
import IndexArea from './components/IndexArea';
import AreaContainer from './components/AreaContainer';
import Footer from './components/Footer';
import playthroughStr, {areas} from './assets/data';
import alltaskStr, {sections} from './assets/overalltask';
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

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';

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
        currentProfile: localStorage.getItem('currentProfile'),
        data: loadMergeData(
          JSON.parse(playthroughStr).default,
          'playthroughChecklist',
          localStorage.getItem('currentProfile'),
        ),
        areas: areas,
        completionStatus: {},
        playthroughCollapse: localStorage.getItem('collapse1')
          ? JSON.parse(localStorage.getItem('collapse1'))
          : {},
        alltaskData: loadMergeData(
          JSON.parse(alltaskStr).default,
          'alltaskChecklist',
          localStorage.getItem('currentProfile'),
        ),
        sections: sections,
        alltaskCompletionStatus: {},
        alltaskCollapse: localStorage.getItem('collapse2')
          ? JSON.parse(localStorage.getItem('collapse2'))
          : {},
      };
    } else {
      this.state = {
        currentProfile: 'default',
        data: JSON.parse(playthroughStr).default,
        completionStatus: {},
        areas: areas,
        playthroughCollapse: {},
        alltaskData: JSON.parse(alltaskStr).default,
        alltaskCompletionStatus: {},
        sections: sections,
        alltaskCollapse: {},
      };
    }
  }

  toggleCompletion = (id, area) => {
    const newState = this.toggleCheckbox({...this.state.data}, id, area);

    this.setState({data: newState});

    this.persistState(this.state);

    this.setState(this.updateTaskCounter(this.state.data, 'completionStatus'));
  };

  toggleAlltaskCompletion = (id, area) => {
    const newState = this.toggleCheckbox({...this.state.alltaskData}, id, area);

    this.setState({alltaskData: newState});

    this.persistState(this.state);

    this.setState(
      this.updateTaskCounter(this.state.alltaskData, 'alltaskCompletionStatus'),
    );
  };

  addProfile = name => {
    // reset state to original
    this.setState(
      {
        data: JSON.parse(playthroughStr).default,
        alltaskData: JSON.parse(alltaskStr).default,
        currentProfile: name,
      },
      () => {
        localStorage.setItem('currentProfile', name);
        localStorage.setItem(
          'playthroughChecklist',
          JSON.stringify(
            this.storageUpdateHelper(
              this.state.data,
              name,
              'playthroughChecklist',
            ),
          ),
        );
        localStorage.setItem(
          'alltaskChecklist',
          JSON.stringify(
            this.storageUpdateHelper(
              this.state.alltaskData,
              name,
              'alltaskChecklist',
            ),
          ),
        );

        this.setState(
          this.updateTaskCounter(this.state.data, 'completionStatus'),
        );
        this.setState(
          this.updateTaskCounter(
            this.state.alltaskData,
            'alltaskCompletionStatus',
          ),
        );
        this.forceUpdate();
      },
    );
  };

  deleteProfile = name => {
    const playthroughList = JSON.parse(
      localStorage.getItem('playthroughChecklist'),
    );
    const alltaskList = JSON.parse(localStorage.getItem('alltaskChecklist'));
    const collapse1Obj = JSON.parse(localStorage.getItem('collapse1'));
    const collapse2Obj = JSON.parse(localStorage.getItem('collapse2'));

    if (playthroughList) {
      delete playthroughList[this.state.currentProfile];
      localStorage.setItem(
        'playthroughChecklist',
        JSON.stringify(playthroughList),
      );
    }

    if (alltaskList) {
      delete alltaskList[this.state.currentProfile];
      localStorage.setItem('alltaskChecklist', JSON.stringify(alltaskList));
    }

    if (collapse1Obj) {
      delete collapse1Obj[this.state.currentProfile];
      localStorage.setItem('collapse1', JSON.stringify(collapse1Obj));
    }

    if (collapse2Obj) {
      delete collapse2Obj[this.state.currentProfile];
      localStorage.setItem('collapse2', JSON.stringify(collapse2Obj));
    }

    // if there is remaining profile, load the last one from the list
    const list = Object.keys(playthroughList || {});
    if (list.length >= 1) {
      this.changeProfile(list[list.length - 1]);
    } else {
      // otherwise load a default profile
      this.setState(
        {
          data: JSON.parse(playthroughStr).default,
          completionStatus: {},
          areas: areas,
          alltaskData: JSON.parse(alltaskStr).default,
          alltaskCompletionStatus: {},
          sections: sections,
          currentProfile: 'default',
          playthroughCollapse: {},
          alltaskCollapse: {},
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
        data: loadMergeData(
          JSON.parse(playthroughStr).default,
          'playthroughChecklist',
          name,
        ),
        alltaskData: loadMergeData(
          JSON.parse(alltaskStr).default,
          'alltaskChecklist',
          name,
        ),
        currentProfile: name,
        playthroughCollapse: JSON.parse(localStorage.getItem('collapse1')),
      },
      () => {
        this.setState(
          this.updateTaskCounter(this.state.data, 'completionStatus'),
        );
        this.setState(
          this.updateTaskCounter(
            this.state.alltaskData,
            'alltaskCompletionStatus',
          ),
        );
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

  handleAlltaskCollapse = obj => {
    const newState = this.collapseSection(
      {...this.state.alltaskCollapse},
      this.state.currentProfile,
      obj,
    );

    this.setState({alltaskCollapse: newState}, () =>
      localStorage.setItem(
        'collapse2',
        JSON.stringify(this.state.alltaskCollapse),
      ),
    );
  };

  componentDidMount() {
    this.setState(this.updateTaskCounter(this.state.data, 'completionStatus'));
    this.setState(
      this.updateTaskCounter(this.state.alltaskData, 'alltaskCompletionStatus'),
    );
    document.title = `Sekiro Checklist - ${this.state.currentProfile}`;
  }

  componentDidUpdate() {
    document.title = `Sekiro Checklist - ${this.state.currentProfile}`;
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

    const sectionList = this.state.sections.map(area => {
      return (
        <IndexArea
          key={area.id}
          areaName={area.name}
          link={area.link}
          status={this.state.alltaskCompletionStatus[area.id]}
        />
      );
    });

    const alltaskSection = this.state.sections.map(area => {
      return (
        <AreaContainer
          areaObjectives={this.state.alltaskData[area.id]}
          areaName={area.name}
          link={area.link}
          status={this.state.alltaskCompletionStatus[area.id]}
          toggleCompletion={this.toggleAlltaskCompletion}
          key={area.id}
          profile={this.state.currentProfile}
          collapse={this.state.alltaskCollapse[this.state.currentProfile] || {}}
          handleCollapse={this.handleAlltaskCollapse}
        />
      );
    });

    return (
      <section id="container">
        <Router basename={process.env.PUBLIC_URL}>
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
          <ScrollToTop>
            <Container id="body">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Main
                      areaList={areaList}
                      areaSection={areaSection}
                      completionStatus={this.state.completionStatus}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/checklist"
                  render={props => (
                    <AllTask
                      sectionList={sectionList}
                      alltaskSection={alltaskSection}
                      status={this.state.alltaskCompletionStatus}
                      {...props}
                    />
                  )}
                />
                <Route path="/about" component={About} />
              </Switch>
            </Container>
          </ScrollToTop>
        </Router>
        <Footer />
        <div className="fixed-anchor">
          <a href="#top">
            <FontAwesomeIcon icon={faAngleDoubleUp} />
          </a>
        </div>
      </section>
    );
  }
}
