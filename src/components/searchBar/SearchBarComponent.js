import React from 'react';
import { Link } from 'react-router-dom';

import './SearchBarComponent.css';
import Textbox from '../textbox/TextboxComponent';
import Paths from '../../paths';

export default class SearchBarComponent extends React.Component {
  render() {
    return (
      <div className="searchBar__container">
        <Textbox
          label={this.props.label}
          passValueUp={this.props.passValueUp}
          enterPressed={this.props.enterPressed}
        />
        {/* TODO: replace span with search icon */}
        <Link to={`${Paths.MAP_SEARCH}`} className="searchBar__mapIcon">
          <span>Map</span>
        </Link>
      </div>
    );
  }
}
