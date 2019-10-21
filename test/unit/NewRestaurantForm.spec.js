import { mount } from 'enzyme';
import React from 'react';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;

    beforeEach(() => {
    // jest.fn() is a mock fn (allow us to assert whether the fn was called)
      saveHandler = jest.fn();

      wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find('input[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: 'Sushi Place' } });

      wrapper
        .find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');
    })

    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
    });

    it('clears the text field', () => {
      expect(
        wrapper
        .find('input[data-test="newRestaurantName"]')
        .props().value,
      ).toEqual('');
    });
  });
});
