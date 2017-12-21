import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addFavorites} from '../actions';

class RecipeItem extends Component{
  render(){
    const {recipe,addFavorites} = this.props
    return(

      <div className="recipe-item">
        <div onClick={()=>addFavorites(recipe)}>
          &#9734;
        </div>
        <div className="recipe-text">
          <h4><a href={recipe.href}>{recipe.title}</a></h4>
          <p className="recipe-ingredients">{recipe.ingredients}</p>
        </div>
        <img src={recipe.thumbnail} className='recipe-img' />
      </div>
    )
  }
}

export default connect(null,{addFavorites})(RecipeItem);
