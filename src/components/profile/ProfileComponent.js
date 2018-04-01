import React from 'react';

export default class ProfileComponent extends React.Component {
  render() {
    return (
      <p>Profile {this.props.type} {this.props.id}</p>
    );
  }
}
