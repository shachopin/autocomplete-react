import React, { Component } from 'react';

class App extends Component {
  state = {
    test: "" 
  }

  handleChange = () => {
    
  }
  render() {
    return (
      <div className="container-fluid">
        <form>
          <div className="row">
            <div className="col-xs-6 col-xs-offset-3 form-group">
              <label htmlFor="name_input">Search</label>
              <input type="text" className="form-control"  onChange={} placeholder="Type a product name"  />          
            </div>
          </div>
        </form>   
    </div> 
    );
  }
}

export default App;
