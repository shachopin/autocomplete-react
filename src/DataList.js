import React from 'react'
import DataListItem from './DataListItem'

const DataList = (props) => (
  <ul className="list-group">
    {props.options.map((option, key) => <DataListItem value={option} key={key} pickOption={props.pickOption}/>)}
    {/*props.options.map((option) => option)*/}
  </ul>
)

export default DataList