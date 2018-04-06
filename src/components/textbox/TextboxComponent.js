import _ from 'lodash';
import React from 'react';
import TextField from 'material-ui/TextField';
import MediaQuery from 'react-responsive';

import './Textbox.css';
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

  render() {
    const placeholder = this.props.label || '';
    const underlineStyle = {
      borderBottomColor: AppStyles.fitMeBlue,
    };
    const renderTextField = ({ styles }) => (
      <TextField
        className="textbox__input"
        hintText={placeholder}
        underlineFocusStyle={underlineStyle}
        style={styles}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
    const smallStyles = {
      width: '70%',
      fontSize: '16px'
    };
    const mediumStyles = {
      width: '70%',
      fontSize: '30px'
    };
    const largeStyles = {
      width: '70%',
      fontSize: '30px'
    };

    return (
      <div className="textbox__container">
        <MediaQuery query={MediaQueries.small}>
          {renderTextField({ styles: smallStyles })}
        </MediaQuery>
        <MediaQuery query={MediaQueries.medium}>
          {renderTextField({ styles: mediumStyles })}
        </MediaQuery>
        <MediaQuery query={MediaQueries.large}>
          {renderTextField({ styles: largeStyles })}
        </MediaQuery>
      </div>
    );
  }
}
