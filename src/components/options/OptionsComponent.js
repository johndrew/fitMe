import React from 'react';
import _ from 'lodash';
import Chip from 'material-ui/Chip';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Options extends React.Component {
  constructor(args) {
    super(args);
  }

  componentDidMount() {
    _.defaults(this.props, {
      selectOption: _.noop,
      selectedOptions: [],
    });
  }

  get options() {
    return _.map(this.props.options, option => (
      <MenuItem
        key={option.value}
        value={option.value}
        primaryText={option.label}
        onItemClick={this.props.selectOption(option.value)}
      />
    ));
  }

  get selectedOptions() {
    return _.map(this.props.selectedOptions, option => (
      <Chip
        key={option.value}
        value={option.value}
        primaryText={option.label}
      />
    ));
  }

  render() {
    return (
      <div className="options__container">
        <SelectField>
          {this.options}
        </SelectField>
        <div className="options__selectionContainer">
          {this.selectedOptions}
        </div>
      </div>
    );
  }
}
