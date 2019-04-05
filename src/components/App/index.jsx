import React, { Component } from 'react';
import NavComponent from '../NavComponent/index';
import Articles from '../Articles/index';
import Authors from '../Authors/index';
import Article from '../Article/index';
import Author from '../Author/index';
import Home from '../Home/index';
import './style.scss';
import { Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <Router>
          <Home path="/" />
          <Articles path="articles" />
          <Authors path="authors" />
          <Article path="article" />
          <Author path="author" />
        </Router>
      </div>
    );
  }
}

export default App;
