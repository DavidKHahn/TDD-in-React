import React, { Component } from 'react';

export default class NewRestaurantForm extends Component {
    state = { inputText: ' ' };

    handleTextChange = (event) => {
      this.setState({ inputText: event.target.value });
    }

    handleSave = () => {
      const { onSave } = this.props;
      const { inputText } = this.state;

      onSave(inputText);
    }

    render() {
      const { inputText } = this.state;
      return (
        <div>
          <input
            type="text"
            value={inputText}
            onChange={this.handleTextChange}
            data-test="newRestaurantName"
          />
          <button
            data-test="saveNewRestaurantButton"
            onClick={this.handleSave}
          >
                    Save
          </button>
        </div>
      );
    }
}
