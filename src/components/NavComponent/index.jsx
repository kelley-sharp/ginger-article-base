import React, { Component } from 'react';
import './style.scss';

class NavComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="nav">
          <li>Articles</li>
          <li>Authors</li>
        </ul>
      </div>
    );
  }
}

export default NavComponent;
