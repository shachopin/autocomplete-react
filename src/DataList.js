import React from 'react'
import DataListItem from './DataListItem'

const DataList = (props) => (
  <ul className="list-group">
    {props.options.map((option, key) => (
      <DataListItem option={option} 
                    key={key} 
                    selectOption={props.selectOption}/>
      )
    )}
  </ul>
)

export default DataList