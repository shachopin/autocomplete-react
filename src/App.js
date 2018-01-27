import React, { Component } from 'react';
import DataList from './DataList'
import productsJSON from '../products.json'

class App extends Component {
  componentWillUpdate() {
    console.log("I will update now") 
  }
  
  componentWillMount() {
    console.log(productsJSON) 
    const names = productsJSON.products.map(function(product) {
      return product.name
    });
    this.setState({names: names, options: names})
  }
  
  state = {
    text: "",
    names: [],
    options: []
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
    this.searchName(e.target.value)
  }
  
  searchName(inputName) {
    var newOptions = this.state.names.filter(function(name) {
      return name.includes(inputName);
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <form>
          <div className="row">
            <div className="col-xs-6 col-xs-offset-3 form-group">
              <label htmlFor="name_input">Search</label>
              <input type="text" value={this.state.text} className="form-control" onChange={this.handleChange} placeholder="Type a product name"  />   
              
              <DataList names={this.state.options}/>
      
      


            </div>
          </div>
        </form>   
    </div> 
    )
  }
}

export default App;
