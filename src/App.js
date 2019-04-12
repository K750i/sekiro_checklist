import React, {Component} from 'react';
import AreaContainer from './components/AreaContainer';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        Area1_1: [
          {
            id: '1',
            task: 'Get to the Moon-view Tower',
            done: true,
            area: '1_1',
          },
          {
            id: '2',
            task: 'Acquire Kusabimaru and Healing Gourd',
            done: false,
            area: '1_1',
          },
          {
            id: '3',
            task: 'Face Genichiro Ashina',
            done: false,
            area: '1_1',
          },
        ],
        Area2_1: [
          {id: '1', task: 'Talk to the Sculptor', done: false, area: '2_1'},
          {id: '2', task: 'Talk to Emma', done: false, area: '2_1'},
        ],
      },

      currentProfile: 'default',
    };
  }

  toggleCompletion = (id, area) => {
    const newState = {...this.state};
    newState[this.state.currentProfile][`Area${area}`].map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });

    this.setState(newState);
  };

  render() {
    return (
      <main>
        <AreaContainer
          areaObjectives={this.state[this.state.currentProfile].Area1_1}
          areaName="Ashina Reservoir"
          toggleCompletion={this.toggleCompletion}
        />
        <AreaContainer
          areaObjectives={this.state[this.state.currentProfile].Area2_1}
          areaName="Dilapidated Temple"
          toggleCompletion={this.toggleCompletion}
        />
      </main>
    );
  }
}
