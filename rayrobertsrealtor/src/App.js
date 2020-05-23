import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio/Bio'
import Showcase from './Showcase/Showcase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ray Roberts Realtor</h1>
        </header>
        <Bio />
        <Showcase />
      </div>
    );
  }
}

export default App;
