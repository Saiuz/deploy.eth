import React, { Component } from 'react';
import logo from './fa-icon-ethereum.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Deploy your smart contract to the blockchain!</h1>
          </header>
          <p className="App-intro">
            Source code:
            <input id="input" type="file" accept=".sol"/>
              Contract name:
            <input id="name" type="text"/>
          </p>
        </div>
        );
  }
}

export default App;

