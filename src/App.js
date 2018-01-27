import React, { Component } from 'react';
import DataList from './DataList'
import productsJSON from '../products.json'
import sortBy from 'sort-by'

class App extends Component {
  componentWillMount() {
    const allOptions = productsJSON.products
      .sortBy("name")
      .map(function(product) {
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
    this.setState({selectedOption: e.target.value})
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
  
  clearSelectedOption = () => {
    this.setState({selectedOption: '', searchedOptions:[]}) 
  }
  
  handleSubmission = (e) => {
    e.preventDefault();
    this.setState({selectedOption: ''})
    alert(`There is no server processing your request, but thank you for choosing ${this.state.selectedOption}`)
  }

  render() {
    return (
      <div className="container-fluid">
        <br/>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmission}> 
          <div className="row">
            <div className="col-xs-6 col-xs-offset-3 form-group">
              <input type="text" value={this.state.selectedOption} className="form-control" onChange={this.handleChange} placeholder="Type a product name"  />   
              <DataList options={this.state.searchedOptions} selectOption={this.selectOption}/>
            </div>
            <div>
              <button id="submit_button" className="btn btn-success">Submit</button>
              &nbsp;
              <button type="button" id="search_button" className="btn btn-warning" onClick={this.clearSelectedOption}>Clear</button>
            </div>    
          </div>
        </form>   
      </div> 
    )
  }
}

export default App;
