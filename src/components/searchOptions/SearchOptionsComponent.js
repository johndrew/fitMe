import React from 'react';
import Paper from 'material-ui/Paper';
import DropdownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import _ from 'lodash';

import './SearchOptionsComponent.css';
import Button from '../button/ButtonComponent';
import MultiSelect from '../multiSelect/MultiSelectComponent';

export default class SearchOptionsComponent extends React.Component {
  constructor(args) {
    super(args);

    this.state = {
      open: false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
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

  get trainingLengthOptions() {
    const validLengths = [
      { value: '0.5', label: '30 minutes' },
      { value: '1', label: '1 hour' },
      { value: '1.5', label: '1 1/2 hour' },
      { value: '2', label: '2 hours' },
    ];

    return _.map(validLengths, length =>
      <MenuItem
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
            {/* TODO: training length */}
            <DropdownMenu>
              {trainingLengthItems}
            </DropdownMenu>
          </div>
          <div className="searchOptions__trainingTypeContainer">
            <p className="searchOptions__label searchOptions__label--trainingType">
              Training Type:
            </p>
            {/* TODO: training type */}
            <MultiSelect />
          </div>
          <div className="searchOptions__sessionTypeContainer">
            <p className="searchOptions__label searchOptions__label--sessionType">
              Session Type:
            </p>
            {/* TODO: session type */}
            <MultiSelect />
          </div>
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
