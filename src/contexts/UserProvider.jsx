import { createContext, useContext, useReducer, useEffect, useState } from 'react'
import useGetData from '@/hooks/useGetData'
import { LoginContext } from '@/contexts/LoginProvider'

export const UserContext = createContext({
  email: '',
  name: '',
  phoneNumber: '',
  profileImageURL: '',
  userDetailInfo: {
    reservations: [],
    wishLists: [],
  },
  addItemToWish: (item) => {},
  deleteItemToWish: (item) => {},
  addItemToReservation: (item) => {},
})

const initalState = { reservations: [], wishLists: [] }

const userDetailInfoReducer = (state, action) => {
  console.log('state', state, 'action', action)
  switch (action.type) {
    case 'ADD_WISH':
      return { ...state, wishLists: [...state.wishLists, action.payload.wishLists] }
    case 'DELETE_WISH':
      return {
        ...state,
        wishLists: state.wishLists.filter((item) => item.id !== action.payload.wishLists.id),
      }
    case 'INIT_WISH':
      return action.payload
    case 'ADD_RESERVATION':
      return { ...state, reservations: [...state.reservations, action.payload.reservations] }
  }
}

const UserProvider = ({ children }) => {
  const currentUser = useContext(LoginContext)
  // const [reservationState, setReservationState] = useState({
  //   title: null,
  //   price: 0,
  //   reservationDays: 0,
  // })
  const [userDetailState, dispatchUserDetailInfoAction] = useReducer(
    userDetailInfoReducer,
    initalState,
  )
  // console.log('currentUser', currentUser)
  // 현재 로그인된 유저 정보 가져옴
  const { data: user } = useGetData(`/users/${currentUser?.uid}`)

  // 로그인된 유저의 wishList를 가져와 렌더
  useEffect(() => {
    if (user?.userDetailInfo?.wishLists) {
      // console.log('userDetailInfo', user.userDetailInfo)
      dispatchUserDetailInfoAction({ type: 'INIT_WISH', payload: user.userDetailInfo })
    }
  }, [user?.userDetailInfo?.wishLists])

  // 업데이트 될때마다 firebase에 저장

  const addItemToWishHandler = (item) => {
    dispatchUserDetailInfoAction({ type: 'ADD_WISH', payload: { wishLists: item } })
  }

  const deleteItemToWishHandler = (item) => {
    dispatchUserDetailInfoAction({ type: 'DELETE_WISH', payload: { wishLists: item } })
  }

  const addItemToReservationHandler = (item) => {
    dispatchUserDetailInfoAction({ type: 'ADD_RESERVATION', payload: { reservations: item } })
  }

  const userContext = {
    email: user?.email,
    name: user?.name,
    phoneNumber: user?.phoneNumber,
    profileImageURL: user?.profileImageURL,
    userDetailInfo: {
      reservations: userDetailState.reservations,
      wishLists: userDetailState.wishLists,
    },
    addItemToWish: addItemToWishHandler,
    deleteItemToWish: deleteItemToWishHandler,
    addItemToReservation: addItemToReservationHandler,
  }

  // usePostUserInfo(`${currentUser?.uid}`, userContext.wishLists)

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}

export default UserProvider
