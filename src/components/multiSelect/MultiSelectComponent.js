import _ from 'lodash';
import React from 'react';
import Chip from 'material-ui/Chip';

import './MultiSelectComponent.css';
import Textbox from '../textbox/TextboxComponent';

export default class MultiSelectComponent extends React.Component {
  constructor(args) {
    super(args);

    this.state = {
      items: this.props.items || [],
      stageItem: '',
      errorMessage: '',
    };

    // Bind methods
    this.prepareItem = this.prepareItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);

    // Define errors
    this.errorTemplates = {
      itemAlreadyAdded: label =>
        `Item with label ${label} has already been added. Each item can only be added once`,
    }
  }

  prepareItem(event, item) {
    this.setState({
      stageItem: item,
      tmp: item,
    });
  }

  itemExists(itemId) {
    return _.find(this.state.items, item => item.id === itemId) != null;
  }

  addItem() {
    const newItem = { id: this.state.stageItem, label: this.state.stageItem };
    if (this.itemExists(newItem.id)) {
      this.setState({
        errorMessage: this.errorTemplates.itemAlreadyAdded(newItem.label),
      });
    } else {
      this.setState({
        errorMessage: '',
        items: this.state.items.concat([newItem]),
      });
    }
  }

  removeItem(itemId) {
    const updatedItems = _.filter(this.state.items, item => item.id !== itemId);

    this.setState({
      errorMessage: '',
      items: updatedItems,
    });
  }

  get chips() {
    return _.map(this.state.items, chip =>
      <Chip
        key={chip.id}
        onRequestDelete={this.removeItem.bind(this, chip.id)}
      >
        {chip.label}
      </Chip>
    );
  }

  render() {
    return (
      <div className="multiSelect__container">
        <Textbox
          passValueUp={this.prepareItem}
          enterPressed={this.addItem}
          clearOnEnter={true}
        />
        {this.state.errorMessage && 
          <span className="multiSelect__errorArea">
            {this.state.errorMessage}
          </span>
        }
        <div className="multiSelect__itemsContainer">
          {this.chips}
        </div>
      </div>
    );
  }
}
