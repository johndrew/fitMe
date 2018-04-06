import React from 'react';
import _ from 'lodash';

import './SearchScreen.css';

import SearchBar from '../../components/searchBar/SearchBarComponent';
import SearchOptions from '../../components/searchOptions/SearchOptionsComponent';
import SearchResults from '../../components/searchResults/SearchResultsComponent';

// Temporary Resources
import SallyUserSearchResults from '../../resources/sallyUserSearchResults.json';
import Paths from '../../paths';

export default class SearchScreen extends React.Component {
  constructor(args) {
    super(args);
    const showSearchResults = _.includes(args.history.location.search, 'searchResultsVisible=true');

    this.state = {
      searchOptionsOpen: false,
      searchResultsVisible: showSearchResults,
    };

    // Bind methods
    this.openSearchOptions = this.openSearchOptions.bind(this);
    this.closeSearchOptions = this.closeSearchOptions.bind(this);
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleSearchRequest = this.handleSearchRequest.bind(this);

    this.historyListener = args.history.listen((location, action) => {
      // Ensure we only press back once, and not twice: once for url query and once for base path
      if (location.pathname === Paths.SEARCH && showSearchResults) {
        args.history.goBack();
      }
    })
  }

  componentWillUnmount() {
    this.historyListener();
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
    this.setState({
      searchResultsVisible: true
    });
    this.props.history.push(`${Paths.SEARCH}?searchResultsVisible=true`);
  }

  render() {
    return (
      <div className="searchScreen__container">
        <div className="searchScreen__searchContainer">
          <SearchBar
            label="Search"
            passValueUp={this.handleSearchValue}
            enterPressed={this.handleSearchRequest}
          />
          <SearchOptions />
        </div>
        {this.state.searchResultsVisible && <div className="searchScreen__searchResultsContainer">
          <SearchResults results={SallyUserSearchResults} />
        </div>}
      </div>
    );
  }
}
