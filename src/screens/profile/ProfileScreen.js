import React from 'react';

import Profile from '../../components/profile/ProfileComponent';

// Temporary Resources
import SallyUserSearchResults from '../../resources/sallyUserSearchResults.json';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.type = props.match.params.type;
    this.id = props.match.params.id;
  }

  render() {
    return (
      <div className="profileScreen__container">
        <Profile type={this.type} id={this.id} data={SallyUserSearchResults} />
      </div>
    );
  }
}
