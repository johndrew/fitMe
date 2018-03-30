import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Textbox from '../../components/textbox/TextboxComponent';
import Button from '../../components/button/ButtonComponent';

// Styles
import './LoginScreen.css';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <div className="loginScreen__container">
        <h1 className="loginScreen__header">Welcome to Fit Me!</h1>
        <div className="loginScreen__loginForm">
          <Textbox
            label="Username"
          />
          <Textbox
            label="Password"
          />
          <Link to={`/search`}>
            <Button
              label="Login"
              path="/search"
            />
          </Link>
        </div>
      </div>
    );
  }
}
