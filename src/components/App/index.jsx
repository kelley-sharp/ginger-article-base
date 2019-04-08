import React, { Component } from 'react';
import NavComponent from '../NavComponent';
import ArticleList from '../ArticleList';
import AuthorList from '../AuthorList';
import Article from '../Article';
import Author from '../Author';
import Home from '../Home';
import './style.scss';
import { Router } from '@reach/router';
import { getArticles } from '../../services/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      authors: []
    };
  }

  async componentDidMount() {
    const { articles, authors } = await getArticles();
    this.setState({ articles, authors });
  }

  render() {
    return (
      <div className="App">
        <NavComponent />
        <Router>
          <Home path="/" />
          <ArticleList path="/articles" articles={this.state.articles} />
          <AuthorList path="/authors" authors={this.state.authors} />
          <Article path="/article" />
          <Author path="/authors/:author" />
        </Router>
      </div>
    );
  }
}

export default App;
