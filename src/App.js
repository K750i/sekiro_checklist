import React, {Component} from 'react';
import AreaContainer from './components/AreaContainer';
import ProfileForm from './components/ProfileForm';
import dataObject from './assets/data';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = dataObject;
    this.currentProfile = 'default';
  }

  toggleCompletion = (id, area) => {
    const newState = {...this.state};
    newState[`Area${area}`].map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });

    this.setState(newState);

    localStorage.setItem(this.currentProfile, JSON.stringify(this.state));
    localStorage.setItem('currentProfile', this.currentProfile);
  };

  addProfile = name => {
    console.log(name);
  };

  componentDidMount() {
    if (localStorage.getItem(this.currentProfile)) {
      this.currentProfile = localStorage.getItem('currentProfile');
      this.setState(JSON.parse(localStorage.getItem(this.currentProfile)));
    }
  }

  render() {
    return (
      <section>
        <ProfileForm
          profile={this.currentProfile}
          addProfile={this.addProfile}
        />
        <main>
          <AreaContainer
            areaObjectives={this.state.Area1_1}
            areaName="Ashina Reservoir"
            toggleCompletion={this.toggleCompletion}
          />
          <AreaContainer
            areaObjectives={this.state.Area2_1}
            areaName="Dilapidated Temple"
            toggleCompletion={this.toggleCompletion}
          />
        </main>
      </section>
    );
  }
}
