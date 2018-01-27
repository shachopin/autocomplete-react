import React, { Component } from 'react';
import DataList from './DataList'
import productsJSON from '../products.json'

class App extends Component {
  componentWillMount() {
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

  render() {
    return (
      <div className="container-fluid custom-div">
        <form>
          <div className="row">
            <div className="col-xs-6 col-xs-offset-3 form-group">
              <input type="text" value={this.state.selectedOption} className="form-control" onChange={this.handleChange} placeholder="Type a product name"  />   
              <DataList options={this.state.searchedOptions} selectOption={this.selectOption}/>
            </div>
            <div class="text-center">
              <button id="search_button" className="btn btn-success">Search</button>
            </div>
          </div>
        </form>   
    </div> 
    )
  }
}

export default App;
