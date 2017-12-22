import React,{Component} from 'react';
import {connect} from 'react-redux';
import RecipeList from './RecipeList';
import SearchRecipes from './SearchRecipes';
import FavoriteList from './FavoriteList';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Recipe Finder</h1>
        <SearchRecipes/>
        <RecipeList recipes={this.props.recipes}/>
      </div>
    )
  }
}

const mapStateToProps = state =>{return {recipes:state.recipes}};

export default connect(mapStateToProps,{})(App);
