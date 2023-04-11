import React, { createContext, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const LoginContext = createContext(null)

const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  // get currentUser
  onAuthStateChanged(getAuth(), async (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser)
    } else {
      setCurrentUser(null)
    }
  })

  return <LoginContext.Provider value={currentUser}>{children}</LoginContext.Provider>
}

export default LoginProvider
