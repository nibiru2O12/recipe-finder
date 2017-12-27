export const SET_RECIPES = "SET_RECIPES";
export const ADD_FAVORITES ="ADD_FAVORIES";
export const REMOVE_FAVORITES ="REMOVE_FAVORIES";
export const SET_LOADING ="SET_LOADING";

function receiveRecipe(items){
  const action={
    type:SET_RECIPES,
    items
  };
  return action;
}

export function isLoading(loading = false){
  const action={
    type:SET_LOADING,
    loading
  }
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

      //ses isLoading
      dispatch(isLoading(true));

      //clears recipe list
      dispatch(receiveRecipe([]));

      return fetchRecipeJson(filter)
      .then(json => dispatch(receiveRecipe(json.results)))
      .then(()=>dispatch(isLoading(false)));


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
