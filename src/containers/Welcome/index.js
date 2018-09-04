import React, { Component } from 'react';
import { Link } from 'react-router';
import { urls } from '../../routes';
import './styles.css';

class Welcome extends Component {
  render() {
    return (
      <div className='welcome-container'>
        <h1>Welcome to trello board!</h1>

        <p>Click <Link to={urls.trelloBoard}>here</Link> to go to your board</p>
      </div>
    );
  }
}

export default Welcome;
