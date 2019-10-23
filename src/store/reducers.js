import { combineReducers } from 'redux';
import dishes from './dishes/reducers';
import restaurants from './restaurants/reducers';

export default combineReducers({
    restaurants,
    dishes
});
