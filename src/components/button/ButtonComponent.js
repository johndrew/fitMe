import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class Button extends React.Component {
  get options() {
    const options = {
      label: this.props.label,
      onClick: this.props.onClick,
    };

    if (this.props.modalOptions) {
      Object.assign(options, this.props.modalOptions);
    }

    return options;
  }

  get button() {
    let button;

    switch(this.props.type) {
      case 'flat':
        button = <FlatButton {...this.options} />;
        break;
      case 'raised':
      default:
        button = <RaisedButton {...this.options} />;
        break;
    }

    return button;
  }
  render() {
    return (
      <div className="button__container">
        {this.button}
      </div>
    );
  }
}
