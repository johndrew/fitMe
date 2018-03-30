import React from 'react';
import Dialog from 'material-ui/Dialog';

import Button from '../../components/button/ButtonComponent';

export default class ModalWrapperComponent extends React.Component {
  constructor(args) {
    super(args);

    // Binds methods
    this.closeModal = this.closeModal.bind(this);
  }

  get defaults() {
    return {
      yesLabel: 'Apply',
      noLabel: 'Cancel',
    };
  }

  get actions() {
    const yesLabel = this.props.yesLabel || this.defaults.yesLabel;
    const noLabel = this.props.noLabel || this.defaults.noLabel;
    const actions = [
      <Button
        label={noLabel}
        modalOptions={{ primary: true }}
        onClick={this.closeModal}
      />,
      <Button
        label={yesLabel}
        modalOptions={{ primary: true, keyboardFocused: true }}        
        onClick={this.closeModal}
      />,
    ];

    return actions;
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal__container">
        <Dialog
          actions={this.actions}
          open={this.props.open}
          modal={true}
        >
          {this.props.component}
        </Dialog>
      </div>
    );
  }
}
