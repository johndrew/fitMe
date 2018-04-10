import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import './ButtonComponent.css';

export default class Button extends React.Component {
  getOptions() {
    const options = {
      className: 'button__button',
      label: this.props.label,
      onClick: this.props.onClick,
    };

    if (this.props.modalOptions) {
      Object.assign(options, this.props.modalOptions);
    }

    return options;
  }

  getButton() {
    const options = this.getOptions();
    let button;

    switch(this.props.type) {
      case 'flat':
        button = <FlatButton {...options} />;
        break;
      case 'raised':
      default:
        button = <RaisedButton {...options} />;
        break;
    }

    return button;
  }

  render() {
    return (
      <div className="button__container">
        {this.getButton()}
      </div>
    );
  }
}
