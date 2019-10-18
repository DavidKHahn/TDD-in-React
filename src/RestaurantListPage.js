import React, { Component } from 'react';
import NewRestaurantForm from './NewRestaurantForm';

export default class RestaurantListPage extends Component {
handleAddRestaurant = () => {

}

  render() {
    return (
      <div>
        <button
          data-test="addRestaurantButton"
        >
                    Add Restaurant
        </button>
        <NewRestaurantForm
            onSave={this.handleAddRestaurant}
        />
      </div>
    );
  }
}
