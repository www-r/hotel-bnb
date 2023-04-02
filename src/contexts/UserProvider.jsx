import { createContext, useContext, useReducer, useState } from 'react'
import useGetData from '@/hooks/useGetData'
import { LoginContext } from '@/contexts/LoginProvider'
import usePostUserInfo from '../hooks/usePostUserInfo'

export const UserContext = createContext({
  email: '',
  name: '',
  phoneNumber: '',
  profileImageURL: '',
  reservations: [],
  wishLists: [],
  addItemToWish: (item) => {},
})

const initalWishState = []

const wishReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WISH':
      return [...state, action.payload]
  }
}

const UserProvider = ({ children }) => {
  const currentUser = useContext(LoginContext)
  // console.log('currentUser', currentUser)
  const { data: user } = useGetData(`/users/${currentUser?.uid}`)

  const [wishState, dispatchWishAction] = useReducer(wishReducer, initalWishState)

  const addItemToWishHandler = (item) => {
    dispatchWishAction({ type: 'ADD_WISH', payload: item })
  }

  const userContext = {
    email: user?.email,
    name: user?.name,
    phoneNumber: user?.phoneNumber,
    profileImageURL: user?.profileImageURL,
    reservations: [],
    wishLists: wishState,
    addItemToWish: addItemToWishHandler,
  }

  usePostUserInfo(`${currentUser?.uid}`, userContext.wishLists)

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}

export default UserProvider
