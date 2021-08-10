import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { selectIsUserLoggedIn } from '../../redux/accessors'
//import { fetchFunc } from '../../utils/helpers'
//import styles from './Login.module.css'
//import loginSlice from './loginSlice'

const Login = () => {
  //const dispatch = useDispatch()

  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmitLogin(e) {
    e.preventDefault()

    setError(false)
    setLoading(true)
  }

  if (isUserLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <form onSubmit={handleSubmitLogin}>
        {isError && 'Hata'}

        <label>
          <input
            type="text"
            value={username}
            placeholder="Kullanıcı Adı"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          <input
            type="password"
            value={password}
            placeholder="Parola"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button disabled={isLoading || username === '' || password === ''}>Giriş</button>
      </form>
    </div>
  )
}

export default Login
