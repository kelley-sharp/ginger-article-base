import React, { Component } from 'react';
import './style.scss';
import '../App/style.scss';
import { Link } from '@reach/router';
import moment from 'moment';

class AuthorList extends Component {
  render() {
    return this.props.authors.map(author => {
      return (
        <div className="author-list-page">
          <div className="d-flex flex-flow-row-nowrap align-items-center mb-3">
            <i className="fas fa-user user-icon" />
            <h2>
              <Link className="my-header-link" to={`/authors/${author.id}`}>
                {author.name}
              </Link>
            </h2>
          </div>
          <div className="outer-info-container">
            <div className="inner-info-container">
              <p className="sub-heading">Published </p>
              <p className="dynamic-field spacing">
                {author.articles.length}
                {author.articles.length === 1 ? ' article ' : ' articles '}
              </p>
              <p className="sub-heading"> in the last 30 days.</p>
            </div>
            <div className="inner-info-container">
              <p className="sub-heading">
                Most recent article published:{' '}
                <span className="dynamic-field spacing">
                  {moment(author.mostRecentPublication).format('LLLL')}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default AuthorList;
