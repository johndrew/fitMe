import React from 'react';
import AppBar from 'material-ui/AppBar';

import { appStyles } from '../variables';

export default class BannerComponent extends React.Component {
  render() {
    const bannerStyle = {
      background: appStyles.fitMeBlue,
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
        />
      </div>
    );
  }
}
