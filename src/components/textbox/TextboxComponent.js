import React from 'react';
import TextField from 'material-ui/TextField';

import './Textbox.css';
import { appStyles } from '../variables';

export default class Textbox extends React.Component {
  render() {
    const placeholder = this.props.label || '';
    const underlineStyle = {
      borderBottomColor: appStyles.fitMeBlue,
    };

    return (
      <div className="textbox__container">
        <TextField
          className="textbox__input"
          hintText={placeholder}
          underlineFocusStyle={underlineStyle}
        />
      </div>
    );
  }
}
