import React, { Component } from 'react';
import './style.scss';
import { Link } from '@reach/router';

class Authors extends Component {
  render() {
    return this.props.authors.map(author => {
      return (
        <div>
          <Link to={`/authors/${author.id}`}>
            <h2>{author.name}</h2>
          </Link>
          <p>
            {author.number}
            {author.number === 1 ? ' article ' : ' articles '}
            in the last 30 days.
          </p>
        </div>
      );
    });
  }
}

Authors.defaultProps = {
  authors: [
    {
      name: 'Kelley Sharp',
      number: 3,
      articles: ['Test Title', 'Test Title 2', 'Test Title 3']
    },
    {
      name: 'Michael Jane',
      number: 1,
      articles: ['Test Title 2']
    },
    {
      name: 'Jimmy Li',
      number: 2,
      articles: ['Test Title', 'Test Title 3']
    },
    {
      name: 'Viragi Shaw',
      number: 1,
      articles: ['Test Title']
    },
    {
      name: 'Tyler Ketron',
      number: 1,
      articles: ['Test Title 3']
    }
  ]
};

export default Authors;
