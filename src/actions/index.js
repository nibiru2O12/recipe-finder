export const SET_RECIPES = "SET_RECIPES";
export const ADD_FAVORITES ="ADD_FAVORIES";
export const REMOVE_FAVORITES ="REMOVE_FAVORIES";

function receiveRecipe(items){
  const action={
    type:SET_RECIPES,
    items
  };
  return action;
}

function fetchRecipeJson(filter={}){

    const {ingredients,dish}=filter;
    let applyFilter='';

    applyFilter += ingredients ? 'i=' + ingredients : '';
    applyFilter += dish ? (applyFilter === '' ? '' : '&' ) + 'q=' + dish : '';

    const url=`http://www.recipepuppy.com/api/?${applyFilter}`;

    return fetch(url,{
      method:'GET'
    }).then(response => {return response.json();});

}

export function setRecipes(filter){

  return function(dispatch){

      //clears recipe list
      dispatch(receiveRecipe([]));

      return fetchRecipeJson(filter)
      .then(json => dispatch(receiveRecipe(json.results)));
  }

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
