//import { selectIsUserLoggedIn } from '../../redux/accessors'
//import styles from './Home.module.css'

//import { useSelector } from 'react-redux'
//import { Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Home = () => {
  //const isUserLoggedIn = useSelector(selectIsUserLoggedIn)

  // if (!isUserLoggedIn) {
  //   return <Redirect to="/login" />
  // }

  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  )
}

export default Home
