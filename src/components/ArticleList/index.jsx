import React, { Component } from 'react';
import './style.scss';

class ArticleList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.articles.map(article => {
      return (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>Authored by: </p>
          <ul>
            {article.authors.map(author => {
              return <li key={author.id}>{author.name}</li>;
            })}
          </ul>
        </div>
      );
    });
  }
}

export default ArticleList;
