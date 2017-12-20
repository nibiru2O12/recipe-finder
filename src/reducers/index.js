import {combineReducers} from 'redux';
import {SET_RECIPES} from '../actions';

function recipes(state=[],action){
  switch (action.type) {
  case SET_RECIPES :
    return action.items;
    break;
  default:
    return state;
  }
}
const rootReducers = combineReducers({recipes});
export default rootReducers;
