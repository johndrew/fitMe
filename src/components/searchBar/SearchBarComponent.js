import React from 'react';

import './SearchBarComponent.css';
import Textbox from '../textbox/TextboxComponent';

export default class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMapIcon: this.props.showMapIcon,
      showSearchIcon: this.props.showSearchIcon,
    };

    this.handleMapIconPressed = this.handleMapIconPressed.bind(this);
    this.handleSearchIconPressed = this.handleSearchIconPressed.bind(this);
  }

  handleMapIconPressed() {
    this.setState({
      showMapIcon: false,
      showSearchIcon: true,
    });
    this.props.mapIconPressed();
  }

  handleSearchIconPressed() {
    this.setState({
      showMapIcon: true,
      showSearchIcon: false,
    });
    this.props.searchIconPressed();
  }

  render() {
    return (
      <div className="searchBar__container">
        <Textbox
          id="searchBar"
          label={this.props.label}
          passValueUp={this.props.passValueUp}
          enterPressed={this.props.enterPressed}
        />
        {/* TODO: replace span with search icon */}
        {this.state.showMapIcon &&
          <span
            className="searchBar__mapIcon"
            onClick={this.handleMapIconPressed}
          >
            <img src="/icons/place.png" alt="map icon" />
          </span>
        }
        {this.state.showSearchIcon &&
          <span
            className="searchBar__searchIcon"
            onClick={this.handleSearchIconPressed}
          >
          <img src="/icons/search.png" alt="search icon"/>
          </span>
        }
      </div>
    );
  }
}
