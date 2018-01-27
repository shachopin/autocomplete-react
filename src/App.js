import React, { Component } from 'react';
import DataList from './DataList'

class App extends Component {
  state = {
    test: "" 
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
              <input type="text" className="form-control"  onChange={this.handleChange} placeholder="Type a product name"  />   
              <br/>
              <DataList/>
            </div>
          </div>
        </form>   
    </div> 
    );
  }
}

export default App;
