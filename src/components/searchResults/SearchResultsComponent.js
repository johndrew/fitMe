import React from 'react';
import _ from 'lodash';
import { GridList } from 'material-ui/GridList';
import MediaQuery from 'react-responsive';

import './SearchResultsComponent.css';
import TrainerResult from './resultComponents/trainerResult/TrainerResultComponent';
import { MediaQueries } from '../../utilities/variables';

export default class SearchResults extends React.Component {
  renderResultByType(result, options = {}) {
    if (result.trainer) {
      return <TrainerResult
        {...result.trainer}
        className="searchResults__result"
        key={result.id}
        width={options.tileWidth}
      />;
    } else {
      // TODO: LIBRARY: Add front-end logger
      console.warn('Trainer type not supported');
    }
  }

  // TODO: ANTI-MOCK: Determine if it is easier to test by passing in results or directly using props
  renderResults(options) {
    return _.map(this.props.results, result => (this.renderResultByType(result, options)));
  }

  get smallOptions() {
    return {
      cellHeight: 200,
      numberOfColumns: 1,
      tileWidth: '75%',
    };
  }

  get mediumOptions() {
    const mediumColumnNumber = _.min([this.props.results.length, 2]);

    return {
      cellHeight: 300,
      numberOfColumns: mediumColumnNumber,
      tileWidth: '95%',
    };
  }

  get largeOptions() {
    const largeColumnNumber = _.min([this.props.results.length, 4]);
    const cellHeight = (() => {
      switch(largeColumnNumber) {
        case 1:
          return 500;
        case 2:
          return 500;
        default:
          return 400;
      }
    })();
    const tileWidth = (() => {
      switch(largeColumnNumber) {
        case 1:
          return '65%';
        case 2:
          return '85%';
        default:
          return '95%';
      }
    })();

    return {
      cellHeight,
      numberOfColumns: largeColumnNumber,
      tileWidth,
    };
  }

  render() {
    const renderGridList = ({
      cellHeight,
      numberOfColumns,
      tileWidth,
    }) => {
      const style = Object.assign({}, {
        width: this.props.results.length === 1 ? '65%' : '100%',
      });

      return (
        <GridList
          className="searchResults__resultList"
          cellHeight={cellHeight}
          style={style}
          cols={numberOfColumns}
          padding={4}
        >
          {this.renderResults({ tileWidth })}
        </GridList>
      );
    };

    // TODO: Finish removing MediaQuery by finding how to style based on number of children
    return (
      <div className="searchResults__container">
        <MediaQuery query={MediaQueries.small}>
          {renderGridList(this.smallOptions)}
        </MediaQuery>
        <MediaQuery query={MediaQueries.medium}>
          {renderGridList(this.mediumOptions)}
        </MediaQuery>
        <MediaQuery query={MediaQueries.large}>
          {renderGridList(this.largeOptions)}
        </MediaQuery>
      </div>
    );
  }
}
