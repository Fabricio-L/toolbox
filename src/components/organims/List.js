import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getFilesDetails } from '../../redux/slices/filesSlice'
import Row from '../molecules/Row'

const List = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.list.data)
  const files = useSelector((state) => state.files.data)

  useEffect(() => {
    list &&
      list.files.map((file) => {
        dispatch(getFilesDetails(file))
      })
  }, [list])

  return (
    <div className="container">
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {files &&
            files.map((file) => <Row title={file.file} lines={file.lines} />)}
        </tbody>
      </Table>
    </div>
  )
}

export default List
