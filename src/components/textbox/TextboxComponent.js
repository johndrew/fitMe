import _ from 'lodash';
import React from 'react';
import TextField from 'material-ui/TextField';

import './TextboxComponent.css';
import { MediaQueries, AppStyles } from '../../utilities/variables';

export default class Textbox extends React.Component {
  constructor(args) {
    super(args);

    this.state = {
      value: '',
    };

    _.defaults(this.props, {
      clearOnEnter: false,
    });

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(event) {
    switch(event.key) {
      case 'Enter':
        this.props.enterPressed();
        if (this.props.clearOnEnter) {
          this.clear();
        }
        break;
      default:
        break;
    }
  }

  handleChange(event, value) {
    this.setState({
      value: value,
    });

    this.props.passValueUp(event, value);
  }

  clear() {
    // TODO: determine if we need to pass the cleared value up always, or by configuration
    this.setState({
      value: ''
    });
  }

  applyMaskToValue() {
    // TODO: refactor to enable any mask
    return this.state.value.replace(/\w/, '*');
  }

  get value() {
    return this.props.applyMask ? this.applyMaskToValue() : this.state.value;
  }

  render() {
    const placeholder = this.props.label || '';
    const underlineStyle = {
      borderBottomColor: AppStyles.fitMeBlue,
    };

    return (
      <div className="textbox__container">
        <TextField
          id={this.props.id}
          className="textbox__input"
          hintText={placeholder}
          underlineFocusStyle={underlineStyle}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          value={this.value}
        />
      </div>
    );
  }
}
