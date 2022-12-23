import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getFilesList } from './redux/slices/listSlice'
import Topbar from './components/molecules/Topbar'
import List from './components/organims/List'
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFilesList())
  }, [])

  return (
    <div className="App">
      <Topbar title={'React Test App'} />
      <List />
    </div>
  )
}

export default App
