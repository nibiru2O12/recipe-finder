import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {setRecipes} from '../actions';

class SearchRecipes extends Component{

  constructor(props){
    super(props);
    this.state={
      ingredients:"",
      dish:""
    }
    this.handleTextChange=this.handleTextChange.bind(this);
    this.search=this.search.bind(this);
  }

  handleTextChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  search(){
    const url=`http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`;

    fetch(url,{
      method:'GET',
      mode: 'cors',
      headers:{'Access-Control-Allow-Origin':'*','Content-Type':'text/json'}
    }).then(response => response.json())
      .then(json => this.props.setRecipes(json.results));

  }

  render(){

    const {dish,ingredients} = this.state;
    const favCount = this.props.favoriteRecipes.length;
    return(
        <div>
          <h4><Link to='/favorites' className="link">Favorites {favCount>0 ? '(' + favCount + ')' : ''}</Link></h4>
          <Form inline>
            <FormGroup>
              <ControlLabel>Ingredients</ControlLabel>
              {' '}
              <FormControl type="text" placeholder="type Ingredients"
                value={ingredients} name="ingredients"
                onChange={this.handleTextChange}/>
            </FormGroup>
            {' '}
            <FormGroup>
              <ControlLabel>Dish</ControlLabel>
              {' '}
              <FormControl type="text" placeholder="dish"
                value={dish} name="dish" onChange={this.handleTextChange}/>
            </FormGroup>
            {' '}
            <Button onClick={this.search}>Submit</Button>
          </Form>
        </div>
    )
  }
}

const mapStateToProps=state=>{return state};

export default connect(mapStateToProps,{setRecipes})(SearchRecipes)
