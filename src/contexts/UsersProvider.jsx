import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createContext, useState } from 'react'
import useGetData from '../hooks/useGetData'

export const UsersContext = createContext({
  email: '',
  name: '',
  phoneNumber: '',
  profileImageURL: '',
  reservations: [],
  wishLists: [],
})

const UsersProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  onAuthStateChanged(getAuth(), (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser)
    } else {
      setCurrentUser(null)
    }
  })

  const { data: user, loading, error } = useGetData(`/users/${currentUser?.uid}`)
  const usersContext = { user, loading, error }

  return <UsersContext.Provider value={usersContext}>{children}</UsersContext.Provider>
}

export default UsersProvider
