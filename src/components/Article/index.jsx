import React, { Component } from 'react';
import { Link } from '@reach/router';
import './style.scss';
import '../App/style.scss';

class Article extends Component {
  render() {
    const { articleId, articles } = this.props;
    const article = articles.find(a => a.id === articleId);
    if (!article) return null;
    return (
      <div className="article-page">
        <div className="d-flex align-items-center justify-content-center">
          <i className="fas fa-book article-icon" />
          <h2 className="header mb-0">{article.title}</h2>
        </div>
        <p className="sub-heading mt-5">Summary:</p>
        <p>{article.summary}</p>
        <p className="sub-heading mt-5">Authored by:</p>
        <ul className="bulleted-list">
          {article.authors.map(author => {
            return (
              <Link className="my-link" to={`/authors/${author.id}`}>
                <li>{author.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Article;
