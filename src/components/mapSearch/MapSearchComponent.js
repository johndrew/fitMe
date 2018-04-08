import React from 'react';
import _ from 'lodash';

import './MapSearchComponent.css';

export default class MapSearchComponent extends React.Component {
  getMapURl() {
    const mapUrl = 'https://maps.googleapis.com/maps/api/staticmap';
    const center = 'The+University+of+Tampa';
    const key = 'AIzaSyC2Ls_FSoIDTAwelsQkB5iSWlgKDZWgr0k';
    const size = 'size=400x300';
    const addresses = [
      { location: '+820+W+North+A+St,+Tampa,+FL+33606', label: 'E' },
      // { location: '27.943344,-82.468745', label: 'A' },
      // { location: '27.943393,-82.465653', label: 'B' },
    ];
    const markers = _.reduce(addresses,
      (acc, address) => acc += `&markers=color:red%7Clabel:${address.label}%7C${address.location}`,
      '');
    const markerUrl = this.props.addMarkers ? markers : '';

    return `${mapUrl}?center=${center}&${size}${markerUrl}&zoom=15&key=${key}`;
  }

  render() {
    // TODO: Add tool tip when map click
    return (
      <div className="mapSearch__container">
        <img src={this.getMapURl()} alt="The University of Tampa" />
      </div>
    );
  }
}
