import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserLoggedIn: false,
  user: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload
      state.isUserLoggedIn = true
    },
    userLoggedOut: (state, action) => {
      state.user = null
      state.isUserLoggedIn = false
    }
  }
})

export default loginSlice
