import React from 'react';
import { cleanup, fireEvent, render, wait } from 'react-testing-library';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let getByTestId;

    beforeEach(() => {
    // jest.fn() is a mock fn (allow us to assert whether the fn was called)
      saveHandler = jest.fn();

      ({ getByTestId } = render(<NewRestaurantForm
    onSave={saveHandler} />));

      fireEvent.change(
        getByTestId('newRestaurantName'),
        {
          target: {
            id: 'restaurantName',
            value: 'Sushi Place'
          }
        });

      fireEvent.click(getByTestId('saveNewRestaurantButton'));
        return wait();

      });

      afterEach(cleanup);

      it('calls the onSave handler', () => {
        expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
      });

      it('clears the text field', () => {
        expect(getByTestId('newRestaurantName').value).toEqual('');

    });
  });
});
