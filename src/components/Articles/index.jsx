import React, { Component } from 'react';
import './style.scss';

class Articles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.articles.map(article => {
      return (
        <div>
          <h2>{article.title}</h2>
          Authored by: {article.authors}
        </div>
      );
    });
  }
}

export default Articles;
