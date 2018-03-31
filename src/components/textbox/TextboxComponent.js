import React from 'react';
import TextField from 'material-ui/TextField';
import MediaQuery from 'react-responsive';

import './Textbox.css';
//TODO: Consolidate variables
import { appStyles } from '../variables';
import { MediaQueries } from '../../utilities/variables';

export default class Textbox extends React.Component {
  render() {
    const placeholder = this.props.label || '';
    const underlineStyle = {
      borderBottomColor: appStyles.fitMeBlue,
    };
    const renderTextField = ({ styles }) => (
      <TextField
        className="textbox__input"
        hintText={placeholder}
        underlineFocusStyle={underlineStyle}
        style={styles}
      />
    );
    const smallStyles = {
      width: '30%',
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
