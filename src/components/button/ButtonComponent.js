import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MediaQuery from 'react-responsive';

import { MediaQueries } from '../../utilities/variables';

export default class Button extends React.Component {
  getOptions({ fontSize }) {
    const options = {
      label: this.props.label,
      onClick: this.props.onClick,
      labelStyle: {
        fontSize
      }
    };

    if (this.props.modalOptions) {
      Object.assign(options, this.props.modalOptions);
    }

    return options;
  }

  getButton(mediaOptions) {
    const options = this.getOptions(mediaOptions);
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
    const smallStyles = {
      fontSize: '16px'
    };
    const mediumStyles = {
      fontSize: '24px'
    };
    const largeStyles = {
      fontSize: '24px'
    };

    return (
      <div className="button__container">
        <MediaQuery query={MediaQueries.small}>
          {this.getButton(smallStyles)}
        </MediaQuery>
        <MediaQuery query={MediaQueries.medium}>
          {this.getButton(mediumStyles)}
        </MediaQuery>
        <MediaQuery query={MediaQueries.large}>
          {this.getButton(largeStyles)}
        </MediaQuery>
      </div>
    );
  }
}
