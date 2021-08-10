//import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.css'
//import { Context } from './sidebarContext'

const Sidebar = () => {
  //const { sidebarDurum } = useContext(Context)

  //console.log(sidebarDurum)

  return (
    <aside>
      <NavLink exact to="/" activeClassName={styles.activeClassNameGelecek}>
        Anasayfa
      </NavLink>
    </aside>
  )
}

export default Sidebar
