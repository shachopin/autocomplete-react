import React, { Component } from 'react'

class DataListItem extends Component {
  render() {
    return (
      <li className="list-group-item" onClick={() => alert('haha')}>AAA</li>
    )
  }
}

export default DataListItem