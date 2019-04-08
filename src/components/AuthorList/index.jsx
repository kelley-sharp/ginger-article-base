import React, { Component } from 'react';
import './style.scss';
import { Link } from '@reach/router';
import moment from 'moment';

class AuthorList extends Component {
  render() {
    return this.props.authors.map(author => {
      return (
        <div>
          <Link to={`/authors/${author.id}`}>
            <h2>{author.name}</h2>
          </Link>
          <p>
            {author.articles.length}
            {author.articles.length === 1 ? ' article ' : ' articles '}
            in the last 30 days.
          </p>
          <p>
            Most recent article was published:{' '}
            {moment(author.mostRecentPublication).format('LLLL')}
          </p>
        </div>
      );
    });
  }
}

export default AuthorList;
