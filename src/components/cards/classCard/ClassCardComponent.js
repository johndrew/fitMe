import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

import './ClassCard.css';

export default class ClassCard extends React.Component {
  render () {
    const address = _.get(this.props, 'location.address');

    return (
      <Card key={this.props.id}>
        <CardTitle
          title={this.props.title}
          className="classCard__classTitle"
        />
        <Divider />
        <CardText className="classCard__classTime">
          {this.props.dayOfWeek} from {this.props.startTime} to {this.props.endTime}
        </CardText>
        <CardText className="classCard__classLocation">
          {this.props.location.name}
        </CardText>
        <CardText className="classCard__classAddress">
          {address.addressLine1} {address.addressLine2}
          {address.city}, {address.state} {address.zip}
        </CardText>
        <Divider />
        <Link to="">
          <CardText className="classCard__purchaseLink">
            Purchase Session
          </CardText>
        </Link>
      </Card>
    );
  }
}
