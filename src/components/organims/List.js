import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilesDetails } from '../../redux/slices/filesSlice'

const List = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.list.data)
  const files = useSelector((state) => state.files.data)

  useEffect(() => {
    list.files &&
      list.files.map((file) => {
        dispatch(getFilesDetails(file))
      })
  }, [])

  console.log(files)

  return (
    <div className="container">
      {files && files.map((file) => <p>{file.file}</p>)}
    </div>
  )
}

export default List
