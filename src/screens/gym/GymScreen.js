import React from 'react';

export default class GymScreen extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.match.params.id;
  }

  render() {
    return (
      <div>
        <p>Gym Screen</p>
      </div>
    );
  }
}
