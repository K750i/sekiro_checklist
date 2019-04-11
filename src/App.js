import React, {Component} from 'react';
import ListItem from './components/ListItem';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Area1_1: [
        {id: 1, task: 'Defeat Genichiro', done: false, area: '1_1'},
        {id: 2, task: 'Obtain Kusabimaru', done: true, area: '1_1'},
      ],
    };
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
  };

  render() {
    return (
      <ul>
        {this.state.Area1_1.map(item => (
          <ListItem toggleCompletion={this.toggleCompletion} item={item} />
        ))}
      </ul>
    );
  }
}
