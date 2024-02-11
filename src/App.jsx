import React, { createContext, useState } from 'react'
import Home from './pages/Home'

 export const AccountContext = createContext()
const App=() =>{
  const [account, setAccount] = useState([])
  return <AccountContext.Provider value={{account,setAccount}}>
  <Home />

  </AccountContext.Provider>
}

export default App