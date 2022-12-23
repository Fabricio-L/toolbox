import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getFilesList = createAsyncThunk('list/getFilesList', async () => {
  const response = await fetch('https://api-toolbox.vercel.app/file/data')
  if (response.ok) {
    const list = await response.json()
    return list
  }
})

const listSlice = createSlice({
  name: 'list',
  initialState: {
    data: null,
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getFilesList.pending]: (state, action) => {
      state.loading = true
      state.message = 'Getting data...'
    },
    [getFilesList.fulfilled]: (state, action) => {
      state.data = action.payload.data
      state.loading = false
      state.isSuccess = true
      state.message = 'Getting data successfully!'
    },
    [getFilesList.rejected]: (state, action) => {
      state.loading = false
      state.isSuccess = false
      state.message = action.payload
    },
  },
})

export default listSlice
