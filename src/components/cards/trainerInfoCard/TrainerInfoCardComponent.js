import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import _ from 'lodash';

// FIXME: BUG: styles not applied until refresh
// Steps: load search page, click on trainer, see lack of styles, refresh, see styles
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
        className="trainerInfoCard__card"
      >
        <CardText>
          <div
            className="trainerInfoCard__biographyContainer"
            onClick={this.toggleBio}
          >
            <h4 className="trainerInfoCard__biographyHeader">
              Biography
            </h4>
            <div className="trainerInfoCard__trainerBiography">
              {_.first(bioDescriptions)}
              <a className="trainerInfoCard__biographySeeMore">
                {this.state.bioOpen ? 'See Less' : 'See More'}
              </a>
              {this.state.bioOpen && _.tail(bioDescriptions)}
            </div>
          </div>
          <h4 className="trainerInfoCard__certificationsHeader">
            Certifications
          </h4>
          <ul className="trainerInfoCard__certifications">
            {this.certifications}
          </ul>
        </CardText>
      </Card>
    );
  }
}
