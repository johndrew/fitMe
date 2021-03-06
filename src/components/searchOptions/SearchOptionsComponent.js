import React from 'react';
import Paper from 'material-ui/Paper';
import DropdownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import _ from 'lodash';

import './SearchOptionsComponent.css';
import Button from '../button/ButtonComponent';
import MultiSelect from '../multiSelect/MultiSelectComponent';

export default class SearchOptionsComponent extends React.Component {
  constructor(args) {
    super(args);

    const trainingLengths = [
      { value: '0.5', label: '30 minutes' },
      { value: '1', label: '1 hour' },
      { value: '1.5', label: '1 1/2 hour' },
      { value: '2', label: '2 hours' },
    ];

    this.state = {
      open: false,
      trainingLengthValue: trainingLengths[0].value,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleTrainingLengthChange = this.handleTrainingLengthChange.bind(this);

    this.trainingLengths = trainingLengths;
  }

  open() {
    this.setState({
      open: true,
    });
  }

  close() {
    this.setState({
      open: false,
    });
  }

  handleTrainingLengthChange(event, index, value) {
    this.setState({
      trainingLengthValue: value,
    });
  }

  get trainingLengthOptions() {
    return _.map(this.trainingLengths, length =>
      <MenuItem
        key={length.value}
        value={length.value}
        primaryText={length.label}
      />
    );
  }

  get options() {
    const trainingLengthItems = this.trainingLengthOptions;

    return (
      <div className="searchOptions__optionsContainer">
        <Paper>
          <div className="searchOptions__trainingLengthContainer">
            <p className="searchOptions__label searchOptions__label--trainingLength">
              Training Length:
            </p>
            <DropdownMenu
              className="searchOptions__option"
              value={this.state.trainingLengthValue}
              onChange={this.handleTrainingLengthChange}
            >
              {trainingLengthItems}
            </DropdownMenu>
          </div>
          <div className="searchOptions__trainingTypeContainer">
            <p className="searchOptions__label searchOptions__label--trainingType">
              Training Type:
            </p>
            <MultiSelect
              id="searchOptionsTrainingTypes"
              className="searchOptions__option"
            />
          </div>
          <div className="searchOptions__sessionTypeContainer">
            <p className="searchOptions__label searchOptions__label--sessionType">
              Session Type:
            </p>
            <MultiSelect
              id="searchOptionsSessionTypes"
              className="searchOptions__option"
            />
          </div>
          <Divider />
          <Button
            label="Close"
            type="flat"
            onClick={this.close}
          />
        </Paper>
      </div>
    );
  }

  render() {
    return (
      <div className="searchOptions__container">
        {this.state.open && this.options}
        {!this.state.open && 
          <Button
            label="Search Options..."
            type="flat"
            onClick={this.open}
          />}
      </div>
    );
  }
}
