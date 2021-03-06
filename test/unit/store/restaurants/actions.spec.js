import api from '../../../../src/store/api';
import { addRestaurant, ADD_RESTAURANT, loadRestaurants, STORE_RESTAURANTS } from '../../../../src/store/restaurants/actions';
jest.mock('../../../../src/store/api');

describe('restaurant actions', () => {
    describe('loadRestaurants', () => {
        it('store restaurants retrieved from the API', () => {
            const restaurants = [
                {
                    type: 'restaurants',
                    id: '1',
                    attributes: {
                        name: 'Sushi Place',
                    },
                },
                {
                    type: 'restaurants',
                    id: '2',
                    attributes: {
                        name: 'In n out',
                    },
                },
            ];

            const dispatch = jest.fn();
// mocking the api and confirm whether or not server returns this data
            api.get.mockResolvedValue({
                data: {
                    data: restaurants,
                }
            });
// dispatches to STORE_RESTAURANTS action with restaurants data that came from api
            return loadRestaurants()(dispatch)
                .then(() => {
                    expect(dispatch).toHaveBeenCalledWith({
                        type: STORE_RESTAURANTS,
                        restaurants,
                    })
                })
        })
    })

    describe('addRestaurant', () => {
        const name = 'Sushi Place';
        const partialRestaurant = {
            type: 'restaurants',
            attributes: {
                name,
            },
        };

        const restaurant = {
            ...partialRestaurant,
            id: '42',
        };

        let dispatch;

        beforeEach(() => {
            api.post.mockResolvedValue({
                data: {
                    data: restaurant,
                }
            })
            dispatch = jest.fn();
            return addRestaurant(name)(dispatch)
        });

        it('sends the new restaurant to the server', () => {
            expect(api.post).toHaveBeenCalledWith(
                '/restaurants',
        // Note: api data should have 'data' key before passing in value
                { data: partialRestaurant },
            )
        })

        it('stores the new restaurant in the state', () => {
            expect(dispatch).toHaveBeenCalledWith({
                type: ADD_RESTAURANT,
                restaurant
            });
        });
    });
});