import React, { Component } from 'react';
import NavComponent from '../NavComponent/index';
import Articles from '../Articles/index';
import Authors from '../Authors/index';
import Article from '../Article/index';
import Author from '../Author/index';
import Home from '../Home/index';
import './style.scss';
import { Router } from '@reach/router';
import { getArticles } from '../../services/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    const data = await getArticles();
    console.dir(data);
  }

  render() {
    return (
      <div className="App">
        <NavComponent />
        <Router>
          <Home path="/" />
          <Articles path="/articles" articles={this.state.articles} />
          <Authors path="/authors" />
          <Article path="/article" />
          <Author path="/authors/:author" />
        </Router>
      </div>
    );
  }
}

export default App;
