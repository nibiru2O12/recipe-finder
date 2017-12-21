export const SET_RECIPES = "SET_RECIPES";
export const ADD_FAVORITES ="ADD_FAVORIES";
export const REMOVE_FAVORITES ="REMOVE_FAVORIES";

export function setRecipes(items){
  const action={
    type:SET_RECIPES,
    items
  };
  return action;
}

export function addFavorites(recipe){
    const action={
      type: ADD_FAVORITES,
      recipe
    }
    return action;
}

export function removeFavoriteByTitle(title){
  const action={
    type:REMOVE_FAVORITES,
    title
  }
  return action;
}
