import React, { Component } from 'react';
import { Button, Modal, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DishList from './DishList';
import NewDishForm from './NewDishForm';
import { addDish } from './store/dishes/actions';

class RestaurantDetailPage extends Component {
    handleAddDish = (dishName) => {
    const restaurantName = this.props.match.params.name;
      this.props.addDish({
        restaurantName,
        dishName
        });
        $("#addDishModal").modal("close");
    }

    render() {
        const { dishes } = this.props;
        const restaurantName = this.props.match.params.name;
        const restaurantDishes = dishes[restaurantName] || [];

        return (
            <div>
            <Link
                to="/"
                data-testid="backButton"
                >
                    Back
                </Link>
                <Modal
                    id="addDishModal"
                    header="New Dish"
                    actions={[]}
                    trigger={
                <Button data-testid="addDishButton">
                    Add Dish
                </Button>
                    }
                    >
                    <NewDishForm
                        onSave={this.handleAddDish}
                    />
                </Modal>
                <Row>
                    <DishList
                    restaurantName={restaurantName}
                    dishNames={restaurantDishes} />
                </Row>
            </div>
        )
    }
}

function mapStateTopProps(state) {
    return {
        dishes: state.dishes
    };
}

const mapDispatchToProps = {
    addDish
}

export default connect(mapStateTopProps, mapDispatchToProps)(
    RestaurantDetailPage
);
