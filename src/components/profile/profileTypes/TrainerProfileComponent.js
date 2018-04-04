import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';

import './TrainerProfileComponent.css';

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
    return _.map(this.props.classes, classObj => {
      const address = _.get(classObj, 'location.address');
      return (<Card key={classObj.id}>
        <CardTitle
          title={classObj.title}
          className="trainerProfile__classTitle"
        />
        <CardText className="trainerProfile__classTime">
          {classObj.dayOfWeek} from {classObj.startTime} to {classObj.endTime}
        </CardText>
        <CardText className="trainerProfile__classLocation">
          {classObj.location.name}
        </CardText>
        <CardText className="trainerProfile__classAddress">
          {address.addressLine1} {address.addressLine2}
          {address.city}, {address.state} {address.zip}
        </CardText>
      </Card>)
    });
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
 