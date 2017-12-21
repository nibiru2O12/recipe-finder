import {combineReducers} from 'redux';
import {SET_RECIPES,ADD_FAVORITES,REMOVE_FAVORITES} from '../actions';

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
  case REMOVE_FAVORITES:
    return [...removeFavorites(state,action.title)];
  default:
    return state;
  }
}

function removeFavorites(state=[],title){
  return state.filter(fav => {
    return fav.title !== title;
  });
}

const rootReducers = combineReducers({recipes,favoriteRecipes});
export default rootReducers;
