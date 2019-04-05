import React, { Component } from 'react';
import './style.scss';

class Article extends Component {
  constructor(props) {}
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>Summary:</h3>
        <p>{this.props.summary}</p>
        <ul>
          {this.props.authors.map(author => {
            return (
              <li>
                <h2>{author.name}</h2>
                <h3>{author.number}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Article;
