import React, { Component } from 'react';

class Author extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.author.name}</div>;
  }
}

export default Author;
