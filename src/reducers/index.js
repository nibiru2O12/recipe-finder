import {combineReducers} from 'redux';
import {SET_RECIPES,ADD_FAVORITES} from '../actions';

function recipes(state=[],action){
  switch (action.type) {
  case SET_RECIPES :
    return action.items;
    break;
  default:
    return state;
  }
}

export function favoriteRecipes(state=[],action){
  switch (action.type) {
  case ADD_FAVORITES:
    return [...state,action.recipe]
    break;
  default:
    return state;
  }
}
const rootReducers = combineReducers({recipes,favoriteRecipes});
export default rootReducers;
