import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';

export class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>Tic Tac Toe</h1>
      <Main />
    </div>
    );
  }
}

export default App;