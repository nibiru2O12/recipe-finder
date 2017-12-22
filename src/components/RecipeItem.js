import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addFavorites,removeFavoriteByTitle} from '../actions';

class RecipeItem extends Component{

  constructor(props){
    super(props);
    this.state={
      favorite:props.favorite
    }
  }

  favoriteClicked(recipe){
    const current_state = this.state.favorite;
    if(current_state){
        this.props.removeFavoriteByTitle(recipe.title);
    }else{
        this.props.addFavorites(recipe);
    }
    this.setState({
      favorite:!current_state
    });
  }

  render(){
    const {recipe,addFavorites} = this.props
    return(

      <div className="recipe-item">
        <div onClick={()=>this.favoriteClicked(recipe)} className="star">
          {
            this.state.favorite
            ? <div>&#9733;</div>
            : <div>&#9734;</div>
          }
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


RecipeItem.defaultProps={
  favorite:false
}

export default connect(null,{addFavorites,removeFavoriteByTitle})(RecipeItem);
