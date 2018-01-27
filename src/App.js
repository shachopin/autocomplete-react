import React, { Component } from 'react';
import DataList from './DataList'
import productsJSON from '../products.json'

class App extends Component {
  componentWillMount() {
    console.log(productsJSON) 
  }
  
  state = {
    text: "" 
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }
  
  
  render() {
    return (
      <div className="container-fluid">
        <form>
          <div className="row">
            <div className="col-xs-6 col-xs-offset-3 form-group">
              <label htmlFor="name_input">Search</label>
              <input type="text" value="thisclassName="form-control" onChange={this.handleChange} placeholder="Type a product name"  />   
              
              <DataList/>
            </div>
          </div>
        </form>   
    </div> 
    )
  }
}

export default App;
