import React from 'react';
import _ from 'lodash';

import './SearchScreen.css';

import SearchBar from '../../components/searchBar/SearchBarComponent';
import SearchOptions from '../../components/searchOptions/SearchOptionsComponent';
import SearchResults from '../../components/searchResults/SearchResultsComponent';
import MapSearch from '../../components/mapSearch/MapSearchComponent';

// Temporary Resources
import SallyUserSearchResults from '../../resources/sallyUserSearchResults.json';
import Paths from '../../paths';

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    const showSearchResults = _.includes(props.history.location.search, 'searchResultsVisible=true');
    const showMap = _.includes(props.history.location.search, 'mapVisible=true');
    const showMapResults = _.includes(props.history.location.search, 'mapResultsVisible=true');

    this.state = {
      searchOptionsOpen: false,
      searchResultsVisible: showSearchResults,
      showMap: showMap,
      showMapMarkers: showMapResults
    };

    // Bind methods
    this.openSearchOptions = this.openSearchOptions.bind(this);
    this.closeSearchOptions = this.closeSearchOptions.bind(this);
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleSearchRequest = this.handleSearchRequest.bind(this);
    this.handleMapSearchRequest = this.handleMapSearchRequest.bind(this);
    this.handleSearchViewRequest = this.handleSearchViewRequest.bind(this);
  }

  openSearchOptions() {
    this.setState({
      searchOptionsOpen: true,
    });
  }

  closeSearchOptions() {
    this.setState({
      searchOptionsOpen: false,
    });
  }

  handleSearchValue(value) {
    // TBD
  }

  handleSearchRequest() {
    if (this.state.showMap) {
      this.setState({
        showMapMarkers: true,
      });
      this.props.history.push(`${Paths.SEARCH}?mapVisible=true&mapResultsVisible=true`);
    } else {
      this.setState({
        searchResultsVisible: true,
      });
      this.props.history.push(`${Paths.SEARCH}?searchResultsVisible=true`);
    }
  }

  handleMapSearchRequest() {
    this.setState({
      showMap: true,
      searchResultsVisible: false,
    });
    this.props.history.push(`${Paths.SEARCH}?mapVisible=true`);
  }

  handleSearchViewRequest() {
    this.setState({
      showMap: false,
      showMapMarkers: false,
    });
    this.props.history.push(Paths.SEARCH);
  }

  render() {
    return (
      <div className="searchScreen__container">
        <div className="searchScreen__searchContainer">
          <SearchBar
            label="Search"
            passValueUp={this.handleSearchValue}
            enterPressed={this.handleSearchRequest}
            mapIconPressed={this.handleMapSearchRequest}
            searchIconPressed={this.handleSearchViewRequest}
            showMapIcon={!this.state.showMap}
            showSearchIcon={this.state.showMap}
          />
          {!this.state.showMap &&
            <SearchOptions />
          }
        </div>
        {this.state.searchResultsVisible &&
          <div className="searchScreen__searchResultsContainer">
            <SearchResults results={SallyUserSearchResults} />
          </div>
        }
        {this.state.showMap &&
          <div className="searchScreen__mapSearchContainer">
            <MapSearch addMarkers={this.state.showMapMarkers} />
          </div>
        }
      </div>
    );
  }
}
