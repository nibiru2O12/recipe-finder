import React,{Component} from 'react';
import SearchRecipes from './SearchRecipes';
import {connect} from 'react-redux';
import {setRecipe} from '../actions';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Recipe Finder</h1>
        <SearchRecipes recipes={this.props.recipes} onSearch={this.props.setRecipe} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
      recipes:state.recipes
  }
}
export default connect(mapStateToProps,{setRecipe})(App);
