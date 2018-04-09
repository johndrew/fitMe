import React from 'react';
import { Card, CardTitle, CardMedia } from 'material-ui/Card';
import _ from 'lodash';

import './TrainerInfoCardComponent.css';

export default class TrainerInfoCardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bioOpen: false,
    };

    this.toggleBio = this.toggleBio.bind(this);
  }

  toggleBio() {
    this.setState({
      bioOpen: !this.state.bioOpen,
    });
  }

  get certifications() {
    return _.map(this.props.certifications, cert => 
      <li key={cert.shorthandName} className="trainerInfoCard__credentialItem">
        {cert.name} ({cert.shorthandName})
      </li>
    );
  }

  get bioDescription() {
    return _.map(this.props.biography.description, (desc, id) =>
      <p
        key={id}
        className={`trainerInfoCard__biographyParagraph trainerInfoCard__biographyParagraph--${id}`}
      >
        {desc}
      </p>
    );
  }

  render() {
    const bioDescriptions = this.bioDescription;

    return (
      <Card
        style={{ paddingBottom: '5px' }}
      >
        <CardMedia
          overlay={
            <CardTitle
              title={this.props.name}
              subtitle={this.props.title}
              className="trainerInfoCard__trainerName"
            />
          }
          className="trainerInfoCard__trainerImageContainer"
        >
          <img
            src={this.props.image}
            alt={this.props.name}
            className="trainerInfoCard__trainerImage"
          />
        </CardMedia>
        <div onClick={this.toggleBio}>
          <h4 className="trainerInfoCard__biographyHeader">Biography</h4>
          <div className="trainerInfoCard__trainerBiography">
            {_.first(bioDescriptions)}
            <a className="trainerInfoCard__biographySeeMore">
              {this.state.bioOpen ? 'See Less' : 'See More'}
            </a>
            {this.state.bioOpen && _.tail(bioDescriptions)}
          </div>
        </div>
        <h4>Certifications</h4>
        <ul>
          {this.certifications}
        </ul>
      </Card>
    );
  }
}
