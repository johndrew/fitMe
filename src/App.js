import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginScreen from './screens/login/LoginScreen';
import SearchScreen from './screens/search/SearchScreen';
import ProfileScreen from './screens/profile/ProfileScreen';

import './App.css';
import Paths from './paths';

// Screens
const loginScreen = () => {
  return <LoginScreen />;
};
const searchScreen = () => {
  return <SearchScreen />;
};
const profileScreen = ({ match }) => {
  return <ProfileScreen type={match.params.type} id={match.params.id} />;
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="main">
              <Route exact path={Paths.LOGIN} component={loginScreen}/>
              <Route path={Paths.SEARCH} component={searchScreen}/>
              <Route path={`${Paths.PROFILE}/:type/:id`} component={profileScreen}/>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
