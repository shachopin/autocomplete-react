import React, { Component } from 'react'

class DataListItem extends Component {
  handleClick = () => {
    this.props.pickOption(this.props.value)
  }
  
  render() {
    return (
      <li className="list-group-item custom-list-item" onClick={this.handleClick}>{this.props.value}</li>
    )
  }
}

export default DataListItem