import { useDispatch } from 'react-redux'

import loginSlice from '../../pages/Login/loginSlice'
//import styles from './Header.module.css'

const Header = () => {
  const dispatch = useDispatch()

  function logout() {
    dispatch(loginSlice.actions.userLoggedOut())
    localStorage.clear()
    window.location.reload()
  }

  return (
    <header>
      <button onClick={logout}>Çıkış</button>
    </header>
  )
}

export default Header
