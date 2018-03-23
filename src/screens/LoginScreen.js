import React from 'react';

import Textbox from '../components/Textbox';
import './LoginScreen.css';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <div className="loginScreen__container">
        {/* <div className="loginScreen__colorBlock"></div> */}
        <h1 className="loginScreen__header">Welcome to Fit Me!</h1>
        <Textbox label="Username" />
        <Textbox label="Password" />
      </div>
    );
  }
}
