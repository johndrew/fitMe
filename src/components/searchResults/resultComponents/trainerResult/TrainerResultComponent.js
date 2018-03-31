import React from 'react';
import { GridTile } from 'material-ui/GridList';

export default class TrainerResult extends React.Component {
  render() {
    const styles = {
      width: '75%',
      margin: '0px auto'
    };

    return (
      <GridTile
        className="trainerResult__result"
        key={this.props.id}
        title={this.props.name}
        titlePosition={'bottom'}
        style={styles}
      >
        <img
          src={this.props.image}
          className="trainerResult__resultImage"
          alt={this.props.name}
        />
      </GridTile>
    );
  }
}
