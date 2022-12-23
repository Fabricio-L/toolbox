import { configureStore } from '@reduxjs/toolkit'
import filesSlice from './slices/filesSlice'
import listSlice from './slices/listSlice'

export default configureStore({
  reducer: {
    list: listSlice.reducer,
    files: filesSlice.reducer,
  },
})
