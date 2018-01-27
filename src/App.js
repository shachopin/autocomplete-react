import React, { Component } from 'react';
import DataList from './DataList'
import productsJSON from '../products.json'

class App extends Component {
  componentWillUpdate() {
    console.log("I will update now") 
  }
  
  componentWillMount() {
    console.log(productsJSON) 
    const allOptions = productsJSON.products.map(function(product) {
      return product.name
    });
    this.setState({allOptions})
  }
  
  state = {
    selectedOption: "",
    allOptions: [],
    searchedOptions: []
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
    this.searchOption(e.target.value)
  }
  
  searchOption(inputOption) {
    var newOptions = this.state.allOptions.filter(function(option) {
      return option.includes(inputOption);
    });
    this.setState({searchedOptions: newOptions})
  }

  selectOption = (selectedOption) => {
    this.setState({selectedOption, searchedOptions:[]}) 
  }

  render() {
    return (
      <div className="container-fluid">
        <form>
          <div className="row">
            <div className="col-xs-6 col-xs-offset-3 form-group">
              <label htmlFor="name_input">Search</label>
              <input type="text" value={this.state.selectedOption} className="form-control" onChange={this.handleChange} placeholder="Type a product name"  />   
              
              <DataList options={this.state.searchedOptions} selectOption={this.selectOption}/>
      
      


            </div>
          </div>
        </form>   
    </div> 
    )
  }
}

export default App;
