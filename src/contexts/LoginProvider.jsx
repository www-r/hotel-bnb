import React, { createContext, useState } from 'react'
import { useQueryClient } from 'react-query'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const LoginContext = createContext(null)

const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const queryClient = useQueryClient()
  console.log({ currentUser })

  // get currentUser
  onAuthStateChanged(getAuth(), async (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser)
      queryClient.setQueryData('uid', currentUser.uid, {
        staleTime: Infinity,
        keepPreviousData: true,
      })
    } else {
      setCurrentUser(null)
    }
  })

  return <LoginContext.Provider value={currentUser}>{children}</LoginContext.Provider>
}

export default LoginProvider
