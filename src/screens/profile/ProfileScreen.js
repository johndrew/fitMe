import React from 'react';

import TrainerProfile from '../../components/profile/TrainerProfileComponent';

// Temporary Resources
import SallyUserSearchResults from '../../resources/sallyUserSearchResults.json';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.type = props.match.params.type;
    this.id = props.match.params.id;
  }

  get profileComponent() {
    switch(this.type) {
      case 'trainer':
        const data = TrainerProfile.extractData(SallyUserSearchResults, this.id);
        return <TrainerProfile {...data} />
      default:
        break;
    }
  }

  render() {
    return (
      <div className="profileScreen__container">
        {this.profileComponent}
      </div>
    );
  }
}
