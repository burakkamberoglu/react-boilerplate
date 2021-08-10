import { combineReducers } from 'redux'

import loginSlice from '../../pages/Login/loginSlice'

export default combineReducers({
  login: loginSlice.reducer
})
