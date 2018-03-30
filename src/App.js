import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginScreen from './screens/login/LoginScreen';
import SearchScreen from './screens/search/SearchScreen';

import './App.css';
import Paths from './paths';

// Screens
const loginScreen = () => {
  return <LoginScreen />;
};
const searchScreen = () => {
  return <SearchScreen />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="main">
              <Route exact path={Paths.LOGIN} component={loginScreen}/>
              <Route path={Paths.SEARCH} component={searchScreen}/>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
