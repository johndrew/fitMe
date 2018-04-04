import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginScreen from './screens/login/LoginScreen';
import SearchScreen from './screens/search/SearchScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import PurchaseScreen from './screens/purchase/PurchaseScreen';

import Banner from './components/banner/BannerComponent';

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
const purchaseScreen = ({ match }) => {
  return <PurchaseScreen id={match.params.id}  />;
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="main">
              <Banner title="FitMe" />
              <Route exact path={Paths.LOGIN} component={loginScreen}/>
              <Route path={Paths.SEARCH} component={searchScreen}/>
              <Route path={`${Paths.PROFILE}/:type/:id`} component={profileScreen}/>
              <Route path={`${Paths.PURCHASE}/:id`} component={purchaseScreen}/>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
