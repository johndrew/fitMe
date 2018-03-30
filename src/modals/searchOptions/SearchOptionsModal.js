import React from 'react';
import Slider from 'material-ui/Slider';

import './SearchOptionsModal.css';
import ModalWrapper from '../../components/modal/ModalWrapperComponent';
import Options from '../../components/options/OptionsComponent';

export default class SearchOptionsModalComponent extends React.Component {
  constructor(args) {
    super(args);

    this.state = {
      trainingLength: 60,
      trainingTypes: [],
    };

    // Bind Methods
    this.handleTrainingLengthValue = this.handleTrainingLengthValue.bind(this);
    this.handleTrainingTypeValue = this.handleTrainingTypeValue.bind(this);
  }

  get trainingLength() {
    const labelValueMap = {
      30: '30 min',
      60: '1 hour',
      90: '1 1/2 hour',
      120: '2 hours'
    };

    return (
      <div className="searchOptionsModal__trainingLengthContainer">
        <div className="searchOptionsModal__trainingLengthLabelContainer">
          <span className="searchOptionsModal__trainingLengthLabel">
            Training Length:
          </span>
          <span className="searchOptionsModal__trainingLengthValue">
            {labelValueMap[this.state.trainingLength]}
          </span>
        </div>
        <Slider
          className="searchOptionsModal__trainingLength"
          step={30}
          value={this.state.trainingLength}
          min={30}
          max={120}
          onChange={this.handleTrainingLengthValue}
        />
      </div>
    );
  }

  get trainingType() {
    const availableTypes = [
      { label: 'Yoga', value: 'Yoga' },
      { label: 'HIIT', value: 'HIIT' },
      { label: 'Circuit', value: 'Circuit' },
      { label: 'Power Lifting', value: 'Power Lifting' },
    ];

    return (
      <div className="searchOptionsModal__trainingTypeContainer">
        <Options
          options={availableTypes}
          selectOption={this.handleTrainingTypeValue}
          selectedOptions={this.state.trainingTypes}
        />
      </div>
    );
  }

  get searchOptions() {
    return (
      <div className="searchOptionsModal__searchOptionsContainer">
        {this.trainingLength}
        {/* {this.trainingType} */}
      </div>
    );
  }

  handleTrainingLengthValue(event, value) {
    this.setState({
      trainingLength: value,
    });
  }

  handleTrainingTypeValue(event, value) {
    const types = this.state.trainingTypes.concat([value]);

    this.setState({
      trainingTypes: types,
    });
  }

  render() {
    return (
      <div className="searchOptionsModal__container">
        <ModalWrapper
          yesLabel="Apply"
          noLabel="Cancel"
          open={this.props.open}
          component={this.searchOptions}
          closeModal={this.props.closeAction}
        />
      </div>
    );
  }
}
