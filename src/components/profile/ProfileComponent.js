import React from 'react';

import TrainerProfile from './profileTypes/TrainerProfileComponent';

export default class ProfileComponent extends React.Component {
  get profileComponent() {
    switch(this.props.type) {
      case 'trainer':
        const data = TrainerProfile.extractData(this.props.data, this.props.id);
        return <TrainerProfile {...data} />
      default:
        break;
    }
  }

  render() {
    return (
      <div className="profile__container">
        {this.profileComponent}
      </div>
    );
  }
}
