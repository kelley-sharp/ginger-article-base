import React, { Component } from 'react';
import './style.scss';
import NavComponent from '../NavComponent/index';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Welcome to Ginger's Article Base</h1>
        <p>Articles on Psychiatry, Mental Illness, Machine Learning, and </p>
        <h4>*Taken from this asdfdlfjk database from Cornell -> link</h4>
      </div>
    );
  }
}

export default Home;
