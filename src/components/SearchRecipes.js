import React,{Component} from 'react';
import {Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';

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
      method:'GET'
    }).then(response => response.json())
      .then(json => this.props.onSearch(json.results));

  }

  render(){

    const {dish,ingredients} = this.state;

    return(
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
    )
  }
}

export default SearchRecipes
