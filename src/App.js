import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginScreen from './screens/login/LoginScreen';
import SearchScreen from './screens/search/SearchScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import GymScreen from './screens/gym/GymScreen';
import PurchaseScreen from './screens/purchase/PurchaseScreen';

import Banner from './components/banner/BannerComponent';

import './App.css';
import Paths from './paths';

// FIXME: Go back full page on back navigation instead of for each query
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="content">
            <Banner title="FitMe" />
            <div className="main">
              <Route exact path={Paths.LOGIN} component={LoginScreen}/>
              <Route path={Paths.SEARCH} component={SearchScreen}/>
              <Route path={`${Paths.PROFILE}/:type/:id`} component={ProfileScreen}/>
              <Route path={`${Paths.GYM}/:id`} component={GymScreen}/>
              <Route path={`${Paths.PURCHASE}/:id`} component={PurchaseScreen}/>
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
