import { ADD_RESTAURANT, STORE_RESTAURANTS } from './actions';

export default function restaurants(state = [], action) {
    switch(action.type) {
        case STORE_RESTAURANTS:
            return action.restaurants;
        case ADD_RESTAURANT:
            return [action.name, ...state];
        default:
            return state;
    }
}

