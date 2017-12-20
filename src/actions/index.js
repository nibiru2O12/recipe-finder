export const SET_RECIPES = "SET_RECIPES";

export function setRecipes(items){
  const action={
    type:SET_RECIPES,
    items
  };
  return action;
}
