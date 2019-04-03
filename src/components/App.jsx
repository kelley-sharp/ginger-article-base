import React, { Component } from 'react';
import NavBar from './NavBar';
import Articles from './Articles';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Articles />
      </div>
    );
  }
}

export default App;
