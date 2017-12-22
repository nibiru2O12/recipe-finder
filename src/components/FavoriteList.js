import React,{Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';

class FavoriteList extends Component{
  render(){
    const {favorites} = this.props;
    console.log('props',this.props.favorites);
    return(
      <div>
        <h4>Favorite Recipes</h4>
        {
          favorites.map((recipe,id)=>{
            return (
                    <RecipeItem recipe={recipe} key={id} />
                  )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {return {favorites:state.favoriteRecipes}}

export default connect(mapStateToProps,null)(FavoriteList);
