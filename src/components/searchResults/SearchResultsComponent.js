import React from 'react';
import _ from 'lodash';
import { GridList } from 'material-ui/GridList';
import MediaQuery from 'react-responsive';

import './SearchResults.css';
import TrainerResult from './resultComponents/trainerResult/TrainerResultComponent';
import { MediaQueries } from '../../utilities/variables';

export default class SearchResults extends React.Component {
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

  get smallOptions() {
    return {
      cellHeight: 200,
      numberOfColumns: 1,
      tileWidth: '75%',
      titleFontSize: '16px',
      subtitleFontSize: '12px'
    };
  }

  get mediumOptions() {
    const mediumColumnNumber = _.min([this.props.results.length, 2]);
    const gridWidth = mediumColumnNumber === 1 ? '65%' : '100%';

    return {
      cellHeight: 300,
      numberOfColumns: mediumColumnNumber,
      gridWidth,
      tileWidth: '95%',
      titleFontSize: '30px',
      subtitleFontSize: '24px'
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
    const gridWidth = largeColumnNumber === 1 ? '65%' : '80%';
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
      gridWidth,
      tileWidth,
      titleFontSize: '30px',
      subtitleFontSize: '24px'
    };
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        height: 'auto',
        overflowY: 'auto',
        margin: '0px auto'
      },
    };
    const renderGridList = ({
      cellHeight,
      numberOfColumns,
      tileWidth,
      titleFontSize,
      subtitleFontSize,
      gridWidth,
    }) => {
      const style = Object.assign({}, styles.gridList, {
        width: gridWidth
      });

      return (
        <GridList
          cellHeight={cellHeight}
          style={style}
          cols={numberOfColumns}
          padding={4}
        >
          {this.renderResults({ tileWidth, titleFontSize, subtitleFontSize })}
        </GridList>
      );
    };

    return (
      <div className="searchResults__container" styles={styles.root}>
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
