import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardMedia } from 'material-ui/Card';

import './TrainerProfileComponent.css';
import ClassCard from '../../classCard/ClassCardComponent';

export default class TrainerProfile extends React.Component {
  static extractData(data, id) {
    return _.chain(data)
      .find(entry => _.get(entry, 'trainer.id') === id)
      .get('trainer')
      .value();
  }

  get credentials() {
    const fakeCreds = ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit'];
    return _.map(fakeCreds, (cred) => (
      <li key={cred} className="trainerProfile__credentialItem">
        {cred}
      </li>
    ));
  }

  get trainerInfo() {
    return (
      <Card style={{ paddingBottom: '5px' }}>
        <CardMedia
          overlay={
            <CardTitle
              title={this.props.name}
              className="trainerProfile__trainerName"
            />
          }
          className="trainerProfile__trainerImageContainer"
        >
          <img
            src={this.props.image}
            alt={this.props.name}
            className="trainerProfile__trainerImage"
          />
        </CardMedia>
        <ul className="trainerProfile__credentials">
          {this.credentials}
        </ul>
      </Card>
    );
  }

  get classes() {
    return _.map(this.props.classes, classObj => <ClassCard {...classObj} key={classObj.id} />);
  }

  render() {
    return (
      <div className="trainerProfile__container">
        <div className="trainerProfile__infoContainer">
          {this.trainerInfo}
        </div>
        <div className="trainerProfile__classesContainer">
          {this.classes}
        </div>
      </div>
    );
  }
}
 