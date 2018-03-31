import React from 'react';
import _ from 'lodash';
import { GridList } from 'material-ui/GridList';
import MediaQuery from 'react-responsive';

import './SearchResults.css';
import TrainerResult from './resultComponents/trainerResult/TrainerResultComponent';
import { MediaQueries } from '../../utilities/variables';

export default class SearchResults extends React.Component {
  constructor(args) {
    super(args);

    this.state = {
      displayedResults: this.props.results,
    }
  }

  renderResultByType(result, options = {}) {
    if (result.trainer) {
      return <TrainerResult
        {...result.trainer}
        key={result.id}
        width={options.tileWidth}
        titleFontSize={options.titleFontSize}
        subtitleFontSize={options.subtitleFontSize}
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

  render() {
    // TODO: These styles were borrowed from http://www.material-ui.com/#/components/grid-list.
    // Determine if they should stay.
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        height: 'auto',
        overflowY: 'auto'
      },
    };
    const renderGridList = ({
      cellHeight,
      numberOfColumns,
      tileWidth,
      titleFontSize,
      subtitleFontSize,
      gridWidth,
    }) => (
      <GridList
        cellHeight={cellHeight}
        style={Object.assign({}, styles.gridList, { width: gridWidth })}
        cols={numberOfColumns}
        padding={4}
      >
        {this.renderResults({ tileWidth, titleFontSize, subtitleFontSize })}
      </GridList>
    );
    const smallOptions = {
      cellHeight: 200,
      numberOfColumns: 1,
      tileWidth: '75%',
      titleFontSize: '16px',
      subtitleFontSize: '12px'
    };
    const mediumOptions = {
      cellHeight: 300,
      numberOfColumns: 2,
      tileWidth: '95%',
      titleFontSize: '30px',
      subtitleFontSize: '24px'
    };
    const largeColumnNumber = 1;
    // const largeColumnNumber = _.min(this.props.results.length, 4);
    const largeOptions = {
      cellHeight: (() => {
        switch(largeColumnNumber) {
          case 1:
            return 300;
          case 2:
            return 300;
          default:
            return 300;
        }
      })(),
      numberOfColumns: largeColumnNumber,
      gridWidth: (() => {
        switch(largeColumnNumber) {
          case 1:
            return '65%';
          case 2:
            return '100%';
          default:
            return '100%';
        }
      })(),
      tileWidth: (() => {
        switch(largeColumnNumber) {
          case 1:
            return '65%';
          case 2:
            return '85%';
          default:
            return '95%';
        }
      })(),
      titleFontSize: '16px',
      subtitleFontSize: '12px'
    };

    return (
      <div className="searchResults__container" styles={styles.root}>
        <MediaQuery query={MediaQueries.small}>
          {renderGridList(smallOptions)}
        </MediaQuery>
        <MediaQuery query={MediaQueries.medium}>
          {renderGridList(mediumOptions)}
        </MediaQuery>
        <MediaQuery query={MediaQueries.large}>
          {renderGridList(largeOptions)}
        </MediaQuery>
      </div>
    );
  }
}
