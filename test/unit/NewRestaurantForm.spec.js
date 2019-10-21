import { mount } from 'enzyme';
import React from 'react';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    it('calls the onSave handler', () => {
      // jest.fn() is a mock fn (allow us to assert whether the fn was called)
      const saveHandler = jest.fn();

      const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);
      wrapper
        .find('input[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: 'Sushi Place' } });

      wrapper
        .find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');

      expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
    });
  });
});
