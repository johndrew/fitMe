import React from 'react';

import './Textbox.css';

export default class Textbox extends React.Component {
  render() {
    const placeholder = this.props.label || '';

    return (
      <div className="textbox__container">
        <input className="textbox__input" type="text" placeholder={placeholder}></input>
      </div>
    );
  }
}
