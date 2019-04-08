import React, { Component } from 'react';
import { Link } from '@reach/router';
import './style.scss';
import '../App/style.scss';

class ArticleList extends Component {
  render() {
    if (this.props.articles.length === 0) {
      return <h1>Loading...</h1>;
    }
    return this.props.articles.map(article => {
      return (
        <div className="article-list-page" key={article.id}>
          <h2>
            <i className="fas fa-book article-icon" />
            <Link className="my-header-link" to={`/articles/${article.id}`}>
              {article.title}.
            </Link>
          </h2>
          <p className="sub-heading">Authored by: </p>
          <ul className="author-list">
            {article.authors.map(author => {
              return (
                <Link className="my-link" to={`/authors/${author.id}`}>
                  <li key={author.id}> {author.name} </li>
                </Link>
              );
            })}
          </ul>
        </div>
      );
    });
  }
}

export default ArticleList;
