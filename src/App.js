import React, {Component} from 'react';
import AreaContainer from './components/AreaContainer';
import ProfileForm from './components/ProfileForm';
import dataStr from './assets/data';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('currentProfile')) {
      this.state = {
        data: JSON.parse(localStorage.getItem('appStateSource'))[
          localStorage.getItem('currentProfile')
        ],
        currentProfile: localStorage.getItem('currentProfile'),
        completionStatus: {},
      };
    } else {
      this.state = {
        data: JSON.parse(dataStr).default,
        completionStatus: {},
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
    // this.forceUpdate();
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
    return {
      ...JSON.parse(localStorage.getItem('appStateSource')),
      [this.state.currentProfile]: this.state.data,
    };
  };

  addProfile = name => {
    // reset state to original
    this.setState(
      {data: JSON.parse(dataStr).default, currentProfile: name},
      () => {
        // have to do it with callback because setState is asynchronous
        // and may not have been called before localStorage.setItem()
        // console.log(this.state);
        // console.log('dataobj', dataObject['default']);
        this.persistState();
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

  changeProfile = name => {
    this.setState(
      {
        data: JSON.parse(localStorage.getItem('appStateSource'))[name],
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
    return (
      <section>
        <ProfileForm
          profiles={
            localStorage.getItem('appStateSource')
              ? Object.keys(JSON.parse(localStorage.getItem('appStateSource')))
              : ['default']
          }
          selectedProfile={this.state.currentProfile}
          addProfile={this.addProfile}
          changeProfile={this.changeProfile}
        />
        <main>
          <AreaContainer
            areaObjectives={this.state.data.Area1_1}
            areaName="Ashina Reservoir"
            status={this.state.completionStatus.Area1_1}
            toggleCompletion={this.toggleCompletion}
          />
          <hr />
          <AreaContainer
            areaObjectives={this.state.data.Area2_1}
            areaName="Dilapidated Temple"
            status={this.state.completionStatus.Area2_1}
            toggleCompletion={this.toggleCompletion}
          />
        </main>
      </section>
    );
  }
}
