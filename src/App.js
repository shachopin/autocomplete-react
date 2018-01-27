import React, { Component } from 'react';
import DataList from './DataList'
import productsJSON from '../products.json'

class App extends Component {
  componentWillMount() {
    console.log(productsJSON) 
    const names = productsJSON.products.map(function(product) {
      return product.name
    });
    this.setState({names})
  }
  
  state = {
    text: "",
    names: []
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
              <input type="text" value={this.state.text} className="form-control" onChange={this.handleChange} placeholder="Type a product name"  />   
              
              <DataList names={this.state.statenames}/>
      
      


            </div>
          </div>
        </form>   
    </div> 
    )
  }
}

export default App;
