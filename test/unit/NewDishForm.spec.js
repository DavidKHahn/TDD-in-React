import React from 'react';
import { cleanup, fireEvent, render, wait } from 'react-testing-library';
import NewDishForm from '../../src/NewDishForm';

describe('NewDishForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let getByTestId;

    beforeEach(() => {
    // jest.fn() is a mock fn (allow us to assert whether the fn was called)
      saveHandler = jest.fn();

      ({ getByTestId } = render(<NewDishForm
    onSave={saveHandler} />));

      fireEvent.change(
        getByTestId('newDishForm'),
        {
          target: {
            id: 'dishForm',
            value: 'Tuna Sashimi'
          }
        });

      fireEvent.click(getByTestId('saveNewDishButton'));
        return wait();

      });

      afterEach(cleanup);

      it('calls the onSave handler', () => {
        expect(saveHandler).toHaveBeenCalledWith('Tuna Sashimi');
    });
  });
});
