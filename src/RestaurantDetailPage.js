import React, { Component } from 'react';
import { Button, Modal, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DishList from './DishList';
import NewDishForm from './NewDishForm';
import { addDish } from './store/dishes/actions';

class RestaurantDetailPage extends Component {
    handleAddDish = (newDishName) => {
      this.props.addDish(newDishName)
        $("#addDishModal").modal("close");
    }

    render() {
        const { dishes } = this.props;
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
                    <DishList dishNames={dishes} />
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
