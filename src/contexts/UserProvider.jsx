import { createContext, useContext, useReducer, useEffect } from 'react'
import useGetData from '@/hooks/useGetData'
import { LoginContext } from '@/contexts/LoginProvider'

export const UserContext = createContext({
  email: '',
  name: '',
  phoneNumber: '',
  profileImageURL: '',
  reservations: [],
  wishLists: [],
  addItemToWish: (item) => {},
  deleteItemToWish: (item) => {},
})

const initalWishState = []

const wishReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WISH':
      return [...state, action.payload]
    case 'DELETE_WISH':
      return state.filter((item) => item.id !== action.payload.id)
    case 'INIT_WISH':
      return action.payload
  }
}

const UserProvider = ({ children }) => {
  const currentUser = useContext(LoginContext)
  const [wishState, dispatchWishAction] = useReducer(wishReducer, initalWishState)
  // console.log('currentUser', currentUser)
  // 현재 로그인된 유저 정보 가져옴
  const { data: user } = useGetData(`/users/${currentUser?.uid}`)

  // 로그인된 유저의 wishList를 가져와 렌더
  useEffect(() => {
    if (user?.wishLists) {
      dispatchWishAction({ type: 'INIT_WISH', payload: user.wishLists })
    }
  }, [user?.wishLists])

  // 업데이트 될때마다 firebase에 저장

  const addItemToWishHandler = (item) => {
    dispatchWishAction({ type: 'ADD_WISH', payload: item })
  }

  const deleteItemToWishHandler = (item) => {
    dispatchWishAction({ type: 'DELETE_WISH', payload: item })
  }

  const userContext = {
    email: user?.email,
    name: user?.name,
    phoneNumber: user?.phoneNumber,
    profileImageURL: user?.profileImageURL,
    reservations: [],
    wishLists: wishState,
    addItemToWish: addItemToWishHandler,
    deleteItemToWish: deleteItemToWishHandler,
  }

  // console.log('wishState', wishState)

  // usePostUserInfo(`${currentUser?.uid}`, userContext.wishLists)

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}

export default UserProvider
