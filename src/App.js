import React, { Component } from 'react';
import './App.css';
import Temp from './components/Temp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { person: { name: 'whale' } };
  }

  componentDidMount() {
    this.getLuke();
  }

  getLuke() {
    fetch('https://swapi.co/api/people/1')
      .then(resp => resp.json())
      .then(res => this.setState({ person: res }));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          this is a div {JSON.stringify(this.state.person.name)}
        </div>
        <Temp />
      </div>
    );
  }
}

export default App;
