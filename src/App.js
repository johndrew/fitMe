import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginScreen from './screens/login/LoginScreen';
import SearchScreen from './screens/search/SearchScreen';
import './App.css';

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
          <div className="main">
            <MuiThemeProvider>
              <Route exact path="/" component={loginScreen}/>
              <Route path="/search" component={searchScreen}/>
            </MuiThemeProvider>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
