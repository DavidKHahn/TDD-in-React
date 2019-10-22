import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import NewDishForm from './NewDishForm';

export default class RestaurantDetailPage extends Component {
    render() {
        return (
            <div>
                <Modal
                    header="New Dish"
                    actions={[]}
                    trigger={
                <Button data-testid="addDishButton">
                    Add Dish
                </Button>
                    }
                    >
                    <NewDishForm />
                </Modal>
            </div>
        )
    }
}