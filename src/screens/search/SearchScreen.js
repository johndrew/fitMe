import React from 'react';

import './SearchScreen.css';
import Banner from '../../components/banner/BannerComponent';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <div className="searchScreen__container">
        <Banner />
      </div>
    );
  }
}
