import React from 'react';

import './SearchScreen.css';
import Paths from '../../paths';

import Banner from '../../components/banner/BannerComponent';
import Button from '../../components/button/ButtonComponent';
import Textbox from '../../components/textbox/TextboxComponent';

import SearchOptionsModal from '../../modals/searchOptions/SearchOptionsModal';

export default class SearchScreen extends React.Component {
  constructor(args) {
    super(args);

    this.state = {
      searchOptionsOpen: false,
    };

    // Bind methods
    this.openSearchOptions = this.openSearchOptions.bind(this);
    this.closeSearchOptions = this.closeSearchOptions.bind(this);
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

  render() {
    return (
      <div className="searchScreen__container">
        <Banner
          title="FitMe"
        />
        <div className="searchScreen__searchContainer">
          <Textbox
            label="Search"
          />
          <Button
            label="Search Options..."
            type="flat"
            onClick={this.openSearchOptions}
          />
          <SearchOptionsModal
            open={this.state.searchOptionsOpen}
            closeAction={this.closeSearchOptions}
          />
        </div>
      </div>
    );
  }
}
