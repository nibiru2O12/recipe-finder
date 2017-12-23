import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeItem from './RecipeItem';

class FavoriteList extends Component{
  render(){
    const {favorites} = this.props;
    console.log('props',this.props.favorites);
    return(
      <div>
        <h4><Link to='/' className="link">Home</Link></h4>
        <h4>Favorite Recipes</h4>
        {
          favorites.map((recipe,id)=>{
            return (
                    <RecipeItem recipe={recipe} key={recipe.title} favorite />
                  )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {return {favorites:state.favoriteRecipes}}

export default connect(mapStateToProps,null)(FavoriteList);
