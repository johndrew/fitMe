import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button__container">
        <FlatButton
          label={this.props.label}
        />
      </div>
    );
  }
}
