import React from 'react';
import { Card, CardTitle, CardMedia } from 'material-ui/Card';

export default class TrainerImageCardComponent extends React.Component {
  render() {
    return (
      <Card
        className="trainerImageCard__card"
      >
        <CardMedia
          overlay={
            <CardTitle
              title={this.props.name}
              subtitle={this.props.title}
              className="trainerImageCard__trainerName"
            />
          }
          className="trainerImageCard__trainerImageContainer"
        >
          <img
            src={this.props.image}
            alt={this.props.name}
            className="trainerImageCard__trainerImage"
          />
        </CardMedia>
      </Card>
    );
  }
}
