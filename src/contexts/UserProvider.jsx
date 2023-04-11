import { createContext, useContext, useReducer, useEffect } from 'react'
import useGetData from '@/hooks/useGetData'
import { LoginContext } from '@/contexts/LoginProvider'

export const UserContext = createContext({
  email: '',
  name: '',
  phoneNumber: '',
  profileImageURL: '',
  reservations: [
    {
      id: '',
      reservationDays: 0,
    },
  ],
  wishList: [],
  addItemToWish: (roomId) => {},
  deleteItemToWish: (roomId) => {},
})

const initialWishState = []

const wishReducer = (state, action) => {
  console.log('state', state, 'action', action)
  switch (action.type) {
    case 'ADD_WISH':
      return [...state, action.payload]

    case 'DELETE_WISH':
      return state.filter((id) => id !== action.payload)

    case 'INIT_WISH':
      return action.payload

    default:
      return state
  }
}

const UserProvider = ({ children }) => {
  const currentUser = useContext(LoginContext)
  const [wishState, dispatchWishAction] = useReducer(wishReducer, initialWishState)

  // 현재 로그인된 유저 정보 가져옴
  const { data: user } = useGetData(`/users/${currentUser?.uid}`)

  // 로그인된 유저의 wishList를 가져와 렌더
  useEffect(() => {
    if (user?.wishList) {
      dispatchWishAction({ type: 'INIT_WISH', payload: user.wishList })
    }
  }, [user?.wishListm])

  useEffect(() => {
    if (user?.reservations) {
      localStorage.setItem(`${currentUser.uid}-reservation`, JSON.stringify(user.reservations))
    }
  }, [user?.reservations])

  const addItemToWishHandler = (roomId) => {
    dispatchWishAction({ type: 'ADD_WISH', payload: roomId })
  }

  const deleteItemToWishHandler = (roomId) => {
    dispatchWishAction({ type: 'DELETE_WISH', payload: roomId })
  }

  const userContext = {
    email: user?.email,
    name: user?.name,
    phoneNumber: user?.phoneNumber,
    profileImageURL: user?.profileImageURL,
    reservations: user?.reservations,
    wishList: wishState,
    addItemToWish: addItemToWishHandler,
    deleteItemToWish: deleteItemToWishHandler,
  }

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}

export default UserProvider
