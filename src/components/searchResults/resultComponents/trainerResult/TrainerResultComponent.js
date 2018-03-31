import React from 'react';
import { GridTile } from 'material-ui/GridList';

export default class TrainerResult extends React.Component {
  render() {
    const styles = {
      width: this.props.width,
      margin: '0px auto'
    };

    return (
      <GridTile
        className="trainerResult__result"
        key={this.props.id}
        title={this.props.name}
        titlePosition={'bottom'}
        titleStyle={{ fontSize: this.props.titleFontSize }}
        subtitle={<span>Matching Classes: <b>{this.props.classes.length}</b></span>}
        style={styles}
        subtitleStyle={{ fontSize: this.props.subtitleFontSize }}
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
