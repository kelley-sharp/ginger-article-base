import React, { Component } from 'react';
import NavComponent from '../NavComponent/index';
import Articles from '../Articles/index';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <Articles />
      </div>
    );
  }
}

export default App;
