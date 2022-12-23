import React from 'react'
import Cell from '../atoms/Cell'

const Row = (props) => {
  return (
    <>
      <tr>
        <Cell data={props.title} />
        <Cell data={props.lines[0].text} />
        <Cell data={props.lines[0].number} />
        <Cell data={props.lines[0].hex} />
      </tr>
    </>
  )
}

export default Row
