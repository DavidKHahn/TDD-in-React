import { Formik } from 'formik';
import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';

export default class NewDishForm extends Component {

    renderForm = ({
        values,
        handleChange
    }) => (
        <form>
            <Row>
                <Input
                    s={12}
                    label="Dish Name"
                    id="dishName"
                    value={values.dishName}
                    onChange={handleChange}
                    data-testid="newDishName"
                ></Input>
            </Row>
            <Row>
                <Button
                    // type="submit"
                    data-testid="saveNewDishButton"
                >
                    Save
                </Button>
            </Row>
        </form>
    )

    render() {
        return (
            <Formik
                initialValues={{ dishName: '' }}
            >
                {this.renderForm}
            </Formik>
        )
    }
}
