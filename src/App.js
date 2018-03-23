import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import './App.css';

const loginScreen = () => {
  return <LoginScreen />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="main">
            <Route exact path="/" component={loginScreen}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
