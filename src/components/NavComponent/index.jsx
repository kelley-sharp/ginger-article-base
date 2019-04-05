import React, { Component } from 'react';
import Home from '../Home/index';
import './style.scss';
import { Link } from '@reach/router';

class NavComponent extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="articles">Articles</Link>
          </li>
          <li>
            <Link to="authors">Authors</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavComponent;
