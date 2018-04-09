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

// TODO: Inject screens directly into route component field and let screen handle match params
// Screens
const loginScreen = () => {
  return <LoginScreen />;
};
const searchScreen = ({ match, history }) => {
  return <SearchScreen history={history} />;
};
const profileScreen = ({ match }) => {
  return <ProfileScreen type={match.params.type} id={match.params.id} />;
}
const purchaseScreen = ({ match }) => {
  return <PurchaseScreen id={match.params.id}  />;
}

// FIXME: Go back full page on back navigation
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="content">
            <Banner title="FitMe" />
            <div className="main">
              <Route exact path={Paths.LOGIN} component={loginScreen}/>
              <Route path={Paths.SEARCH} component={searchScreen}/>
              <Route path={`${Paths.PROFILE}/:type/:id`} component={profileScreen}/>
              <Route path={`${Paths.PURCHASE}/:id`} component={purchaseScreen}/>
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
