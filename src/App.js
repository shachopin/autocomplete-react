import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <form>
        <div class="row">
          <div class="col-xs-6 col-xs-offset-3 form-group">
            <label for="name_input">Search</label>
            <input type="text" class="form-control" id="name_input" placeholder="Type a product name" list="data_list" required /> 
            
          </div>
        </div>
      </form>   
    );
  }
}

export default App;
