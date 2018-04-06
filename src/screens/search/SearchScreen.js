import React from 'react';

import './SearchScreen.css';

import Button from '../../components/button/ButtonComponent';
import SearchBar from '../../components/searchBar/SearchBarComponent';
import SearchResults from '../../components/searchResults/SearchResultsComponent';

// Temporary Resources
import SallyUserSearchResults from '../../resources/sallyUserSearchResults.json';

export default class SearchScreen extends React.Component {
  constructor(args) {
    super(args);

    this.state = {
      searchOptionsOpen: false,
      searchResultsVisible: false,
    };

    // Bind methods
    this.openSearchOptions = this.openSearchOptions.bind(this);
    this.closeSearchOptions = this.closeSearchOptions.bind(this);
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleSearchRequest = this.handleSearchRequest.bind(this);
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
          {/* TODO: Make search options component */}
          <Button
            label="Search Options..."
            type="flat"
            onClick={this.openSearchOptions}
          />
        </div>
        {this.state.searchResultsVisible && <div className="searchScreen__searchResultsContainer">
          <SearchResults results={SallyUserSearchResults} />
        </div>}
      </div>
    );
  }
}
