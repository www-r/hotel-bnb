import { createContext, useEffect, useState } from 'react'
import { getCurrentUser } from '../firebase'
import useGetData from '../hooks/useGetData'

export const UsersContext = createContext({
  name: '',
  phoneNumber: '',
  profileImageURL: '',
  reservations: [],
  wishLists: [],
})

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getCurrentUser(setUser)
  }, [user])

  const { data: users, loading, error } = useGetData(`/users/${user?.uid}`)
  const usersContext = { users, loading, error }

  return <UsersContext.Provider value={usersContext}>{children}</UsersContext.Provider>
}

export default UsersProvider
