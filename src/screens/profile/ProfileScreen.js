import React from 'react';

import Profile from '../../components/profile/ProfileComponent';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <div className="profileScreen__container">
        <Profile type={this.props.type} id={this.props.id} />
      </div>
    );
  }
}
