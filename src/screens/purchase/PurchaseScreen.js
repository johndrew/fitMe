import React from 'react';

// Temporary Resources
// import SallyUserSearchResults from '../../resources/sallyUserSearchResults.json';

export default class PurchaseScreen extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.match.params.id;
  }

  render() {
    return <p>Purchase</p>;
  }
}
