import React, { Component } from 'react';
import './style.scss';
import '../App/style.scss';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <h1 className="mb-3">Welcome to Article Base</h1>
        <p>
          Articles related to psychiatry, machine Learning, data science, and
          therapy.
        </p>
        <p>
          *Collected from{' '}
          <a className="my-link" href="https://arxiv.org/">
            arxiv.org
          </a>
          , owned and operated by Cornell University.
        </p>
        <div className="home-icons-container">
          <i class="fas fa-book-reader home-icon" />
          <i class="fas fa-brain home-icon" />
          <i class="fas fa-notes-medical home-icon" />
          <i class="fas fa-laptop-code home-icon" />
        </div>
      </div>
    );
  }
}

export default Home;
