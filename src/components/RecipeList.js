import React, {Component} from 'react';
import RecipeItem from './RecipeItem';

class RecipeList extends Component{
  render(){
    const {recipes} = this.props;
    console.log(this.props);
    return(
      <div>
        {
          recipes.map((r,i)=>{
            return(
              <RecipeItem recipe={r} key={i} />
            )
          })
        }
      </div>
    )
  }
}

export default RecipeList;
