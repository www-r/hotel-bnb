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
  const [user, setUser] = useState(null)

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })

  const { data: users, loading, error } = useGetData(`/users/${user?.uid}`)
  const usersContext = { users, loading, error }

  return <UsersContext.Provider value={usersContext}>{children}</UsersContext.Provider>
}

export default UsersProvider
