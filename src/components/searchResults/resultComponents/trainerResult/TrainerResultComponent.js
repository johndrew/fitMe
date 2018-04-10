import React from 'react';
import { GridTile } from 'material-ui/GridList';
import { Link } from 'react-router-dom';

import './TrainerResultComponent.css';

export default class TrainerResultComponent extends React.Component {
  render() {
    const styles = {
      width: this.props.width,
      margin: '0px auto'
    };

    return (
      <Link to={`/profile/trainer/${this.props.id}`}>
        <GridTile
          className="trainerResult__result"
          key={this.props.id}
          title={
            <span className="trainerResult__trainerName">
              {this.props.name}
            </span>
          }
          titlePosition={'bottom'}
          titleStyle={{ fontSize: this.props.titleFontSize }}
          subtitle={
            <span className="trainerResult__matchingClasses">
              Matching Classes: <b>{this.props.classes.length}</b>
            </span>
          }
          style={styles}
          subtitleStyle={{ fontSize: this.props.subtitleFontSize }}
        >
          <img
            src={this.props.image}
            className="trainerResult__resultImage"
            alt={this.props.name}
          />
        </GridTile>
      </Link>
    );
  }
}
