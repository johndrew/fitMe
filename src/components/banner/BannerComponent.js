import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import './BannerComponent.css';
import { AppStyles } from '../../utilities/variables';

export default class BannerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };

    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  openSidebar() {
    this.setState({
      sidebarOpen: true,
    });
  }

  closeSidebar() {
    this.setState({
      sidebarOpen: false,
    });
  }

  render() {
    const bannerStyle = {
      background: AppStyles.fitMeBlue,
    };
    const titleStyle = {
      textAlign: 'center'
    };

    return (
      <div className="banner__container">
        <AppBar
          title={this.props.title}
          titleStyle={titleStyle}
          style={bannerStyle}
          onLeftIconButtonClick={this.openSidebar}
        />
        <Drawer
          className="banner__sidebar"
          open={this.state.sidebarOpen}
        >
          <div className="banner__sidebarTopContainer" onClick={this.closeSidebar}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Stats</MenuItem>
            <MenuItem>Balance</MenuItem>
            <Divider />
          </div>
          <div className="banner__sidebarBottomContainer" onClick={this.closeSidebar}>
            <Divider />
            <MenuItem>About</MenuItem>
            <MenuItem>FAQs</MenuItem>
            <MenuItem>Issues</MenuItem>
          </div>
        </Drawer>
      </div>
    );
  }
}
