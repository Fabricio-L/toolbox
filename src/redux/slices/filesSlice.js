import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getFilesDetails = createAsyncThunk(
  'files/getFilesDetails',
  async (file) => {
    const response = await fetch(
      `https://api-toolbox.vercel.app/file/data/${file}`
    )
    if (response.ok) {
      const file = await response.json()
      return file
    }
  }
)

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getFilesDetails.pending]: (state, action) => {
      state.loading = true
      state.message = 'Getting data...'
    },
    [getFilesDetails.fulfilled]: (state, action) => {
      state.data.push(...action.payload.data)
      state.loading = false
      state.isSuccess = true
      state.message = 'Getting data successfully!'
    },
    [getFilesDetails.rejected]: (state, action) => {
      state.loading = false
      state.isSuccess = false
      state.message = action.payload
    },
  },
})

export default filesSlice
