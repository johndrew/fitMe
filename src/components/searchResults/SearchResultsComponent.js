import React from 'react';
import _ from 'lodash';
import { GridList } from 'material-ui/GridList';

import './SearchResults.css';
import TrainerResult from './resultComponents/trainerResult/TrainerResultComponent';

export default class SearchResults extends React.Component {
  constructor(args) {
    super(args);

    this.state = {
      displayedResults: this.props.results,
    }
  }

  renderResultByType(result) {
    if (result.trainer) {
      return <TrainerResult {...result.trainer} key={result.id} />;
    } else {
      // TODO: LIBRARY: Add front-end logger
      console.warn('Trainer type not supported');
    }
  }

  // TODO: ANTI-MOCK: Determine if it is easier to test by passing in results or directly using props
  renderResults() {
    return _.map(this.props.results, result => (this.renderResultByType(result)));
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
        width: '100%',
        height: 'auto',
        overflowY: 'auto'
      },
    };

    return (
      <div className="searchResults__container" styles={styles.root}>
      <GridList
        cellHeight={200}
        style={styles.gridList}
        cols={1}
        padding={4}
      >
        {this.renderResults(this.props.results)}
      </GridList>
      </div>
    );
  }
}
