import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../App/style.scss';
import './style.scss';

class Author extends Component {
  render() {
    const { authorId, authorsObj } = this.props;

    const author = authorsObj[authorId];
    console.log({ author, authorsObj });
    if (!author) return null;
    return (
      <div className="author-page">
        <div className="d-flex align-items-center justify-content-center mb-5">
          <i class="fas fa-user user-icon" />
          <h2 className="header mb-0">{author.name}</h2>
        </div>
        <p className="sub-heading">Articles Published:</p>
        <ul>
          {author.articles.map(article => {
            return (
              <Link className="my-link" to={`/articles/${article.id}`}>
                <li key={article.id}>{article.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Author;
