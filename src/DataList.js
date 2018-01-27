import React from 'react'
import DataListItem from './DataListItem'

const DataList = (props) => (
  <ul className="list-group">
    {/*<DataListItem />*/}
    {props.names.map((name) => name)}
  </ul>
)

export default DataList