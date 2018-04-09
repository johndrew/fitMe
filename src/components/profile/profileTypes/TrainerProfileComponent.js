import React from 'react';
import _ from 'lodash';

import './TrainerProfileComponent.css';
import InfoCard from '../../cards/trainerInfoCard/TrainerInfoCardComponent';
import ClassCard from '../../cards/classCard/ClassCardComponent';

export default class TrainerProfile extends React.Component {
  static extractData(data, id) {
    return _.chain(data)
      .find(entry => _.get(entry, 'trainer.id') === id)
      .get('trainer')
      .value();
  }

  get classes() {
    return _.map(this.props.classes, classObj => <ClassCard {...classObj} key={classObj.id} />);
  }

  render() {
    return (
      <div className="trainerProfile__container">
        <div className="trainerProfile__infoContainer">
          <InfoCard {...this.props} />
        </div>
        <div className="trainerProfile__classesContainer">
          {this.classes}
        </div>
      </div>
    );
  }
}
 