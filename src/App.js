import React, {Component} from 'react';
import AreaContainer from './components/AreaContainer';
import ProfileForm from './components/ProfileForm';
import dataObject from './assets/data';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.tempObj = {...dataObject};
    this.completionStatus = {};

    if (localStorage.getItem('currentProfile')) {
      this.currentProfile = localStorage.getItem('currentProfile');
      this.state = {
        data: JSON.parse(localStorage.getItem('appStateSource'))[
          this.currentProfile
        ],
      };
    } else {
      this.currentProfile = 'default';
      this.state = {data: {...this.tempObj['default']}};
    }

    this.updateTaskCounter();
  }

  updateTaskCounter() {
    Object.keys(this.state.data).forEach(area => {
      this.completionStatus[area] = this.state.data[area].reduce(
        ([done, total], v) => [v.done ? ++done : done, ++total],
        [0, 0],
      );
    });

    this.forceUpdate();
    console.log(this.completionStatus);
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

    localStorage.setItem(
      'appStateSource',
      JSON.stringify(this.storageUpdateHelper()),
    );
    localStorage.setItem('currentProfile', this.currentProfile);

    // Calculate completion status for the Area of the clicked checkbox
    this.completionStatus[area] = this.state.data[area].reduce(
      ([done, total], v) => [v.done ? ++done : done, ++total],
      [0, 0],
    );
  };

  storageUpdateHelper = () => {
    return {
      ...JSON.parse(localStorage.getItem('appStateSource')),
      [this.currentProfile]: this.state.data,
    };
  };

  addProfile = name => {
    this.currentProfile = name;
    // reset state to original
    this.setState({data: this.tempObj['default']}, () => {
      // have to do it with callback because setState is asynchronous
      // and may not have been called before localStorage.setItem()
      // console.log(this.state);
      // console.log('dataobj', dataObject['default']);
      localStorage.setItem('currentProfile', this.currentProfile);
      localStorage.setItem(
        'appStateSource',
        JSON.stringify(this.storageUpdateHelper()),
      );
      this.forceUpdate();
    });
  };

  changeProfile = name => {
    this.currentProfile = name;
    this.setState(
      {
        data: JSON.parse(localStorage.getItem('appStateSource'))[
          this.currentProfile
        ],
      },
      () => this.updateTaskCounter(),
    );
  };

  render() {
    return (
      <section>
        <ProfileForm
          profiles={
            localStorage.getItem('appStateSource')
              ? Object.keys(JSON.parse(localStorage.getItem('appStateSource')))
              : ['default']
          }
          selectedProfile={this.currentProfile}
          addProfile={this.addProfile}
          changeProfile={this.changeProfile}
        />
        <main>
          <AreaContainer
            areaObjectives={this.state.data.Area1_1}
            areaName="Ashina Reservoir"
            status={this.completionStatus.Area1_1}
            toggleCompletion={this.toggleCompletion}
          />
          <hr />
          <AreaContainer
            areaObjectives={this.state.data.Area2_1}
            areaName="Dilapidated Temple"
            status={this.completionStatus.Area2_1}
            toggleCompletion={this.toggleCompletion}
          />
        </main>
      </section>
    );
  }
}
