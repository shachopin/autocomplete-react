import React, { Component } from 'react'

class DataListItem extends Component {
  handleClick = () => {
    this.props.selectOption(this.props.option)
  }
  
  render() {
    return (
      <li className="list-group-item custom-list-item" onClick={this.handleClick}>{this.props.option}</li>
    )
  }
}

export default DataListItem