import React, { Component } from 'react'

class DataListItem extends Component {
  handleClick 
  render() {
    return (
      <li className="list-group-item" onClick={() => pickOption(this.props.value)}>{this.props.value}</li>
    )
  }
}

export default DataListItem