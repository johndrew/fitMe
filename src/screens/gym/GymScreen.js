import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

import './GymScreen.css';
import ImageCard from '../../components/cards/trainerImageCard/TrainerImageCardComponent';
import ClassCard from '../../components/cards/classCard/ClassCardComponent';

// Temporary Resources
import SallyUserSearchResults from '../../resources/sallyUserSearchResults.json';
import Paths from '../../paths';

export default class GymScreen extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.match.params.id;
  }

  get gym() {
    return _.chain(SallyUserSearchResults)
      .map(result => result.trainer.classes)
      .flatten()
      .find(c => _.get(c, 'location.id') === this.id)
      .value();
  }

  get trainers() {
    return _.chain(SallyUserSearchResults)
      .map(result => result.trainer)
      .filter((trainer) => {
        const classes = _.get(trainer, 'classes');
        return _.some(classes, c => c.location.id === this.id);
      })
      .map(trainer => (
        <Link to={`${Paths.PROFILE}/trainer/${trainer.id}`} key={trainer.id}>
          <ImageCard {...trainer}/>
        </Link>
      ))
      .value();
  }

  get classes() {
    return _.chain(SallyUserSearchResults)
      .map(result => result.trainer.classes)
      .flatten()
      .filter(c => _.get(c, 'location.id') === this.id)
      .map(c => <ClassCard {...c} key={c.id} />)
      .value();
  }

  render() {
    return (
      <div className="gymScreen__container">
        <h2 className="gymScreen__gymHeader">
          {this.gym.location.name}
        </h2>
        <div className="gymScreen__trainersContainer">
          <h4 className="gymScreen__subHeader">Trainers</h4>
          {this.trainers}
        </div>
        <div className="gymScreen__classesContainer">
          <h4 className="gymScreen__subHeader">Classes</h4>
          {this.classes}
        </div>
      </div>
    );
  }
}
