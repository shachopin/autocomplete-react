import React from 'react'
import DataListItem from './DataListItem'

const DataList = (props) => (
  <ul className="list-group">
    {/*props.options.map((option) => <DataListItem value={option} key={option} />)*/}
    {props.options.map((option) => option) />)}
  </ul>
)

export default DataList