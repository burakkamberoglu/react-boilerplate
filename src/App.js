import { useState } from 'react'
import { Provider } from 'react-redux'

import { Context } from './components/Sidebar/sidebarContext'
import { store } from './redux/store'
import Routes from './Routes'

function App() {
  const [sidebarDurum, setSidebarDurum] = useState(true)
  return (
    <Provider store={store}>
      <Context.Provider value={{ sidebarDurum, setSidebarDurum }}>
        <Routes />
      </Context.Provider>
    </Provider>
  )
}

export default App
