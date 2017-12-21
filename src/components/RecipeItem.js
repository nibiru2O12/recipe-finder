import React,{Component} from 'react';

class RecipeItem extends Component{
  render(){
    const {recipe} = this.props
    return(
      <div className="recipe-item">
        <div className="recipe-text">
          <h4><a href={recipe.href}>{recipe.title}</a></h4>
          <p className="recipe-ingredients">{recipe.ingredients}</p>
        </div>
        <img src={recipe.thumbnail} className='recipe-img' />
      </div>
    )
  }
}

export default RecipeItem;
