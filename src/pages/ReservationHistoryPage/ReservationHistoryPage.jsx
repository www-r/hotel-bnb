import React, { useState, useContext, useEffect } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import Header from '@/components/Common/Header/Header'
import ReservedRoom from '@/components/Room/RoomItem/ReservedRoom'
import * as S from '@/pages/ReservationHistoryPage/ReservationHistoryPage.style'
import { ChevronRight, PaymentIcon } from '../../assets/images'
import { getUserInfo, useGetUserInfo } from '../../hooks/useGetUserInfo'
import { useGetRooms } from '@/hooks/useGetRooms'
import { LoginContext } from '../../contexts/LoginProvider'

const ReservationHistoryPage = () => {
  const [data, setData] = useState(false)
  const [reservations, setReservations] = useState([])
  const queryClient = useQueryClient()
  const bringUserData = async () => {
    const uid = queryClient.getQueryData('uid')
    const userInfo = await getUserInfo(uid)
    console.log('userInfo:', userInfo)
    console.log('reservations:', userInfo.reservations)
    setReservations(userInfo.reservations)
    setData(true)
  }
  const { rooms } = useGetRooms()
  console.log('rooms:', rooms)
  // const { user } = useGetUserInfo()
  // console.log(user)
  // setTimeout(() => {
  //   bringUserData()
  // }, 3000)
  function isArrEmpty(arr) {
    if (arr.length === 0) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <Header />
      <S.Container>
        <S.PageTitle>
          <div>
            <a href="#"> 계정 </a>
            <ChevronRight />
            <span> 예약 내역 / 결제 내역 </span>
          </div>
          <S.PageTitleTitle>예약 내역</S.PageTitleTitle>
        </S.PageTitle>
        <S.MainContainer>
          <S.Main>
            <S.DivisionLineRow />
            <h2>예약 내역 / 결제 내역</h2>
            <p>내가 예약한 숙소들의 목록과 내가 남긴 별점들을 확인할 수 있습니다.</p>
            <p> 별점을 남기지 않은 숙소들의 평점도 남길 수 있습니다.</p>
            {reservations.length ? (
              <div className="lists">
                {reservations.length !== 0 &&
                  // reservations &&
                  reservations.map((reservation) => (
                    <ReservedRoom
                      reservationId={reservation.reservationId}
                      roomId={reservation.roomId}
                      dates={reservation.reservationDates}
                      price={reservation.reservationPrice}
                      rate={reservation.rate}
                      key={reservation.reservationId}
                      rooms={rooms}
                    />
                  ))}
              </div>
            ) : (
              <S.Button onClick={bringUserData}>예약 내역 확인하기</S.Button>
            )}
          </S.Main>
          <S.Aside>
            <S.AsideItem>
              <PaymentIcon />
              <h3>별점을 통해 만족도를 평가해주세요.</h3>
              <p>숙소에 대한 만족도를 평가해주세요.</p>
            </S.AsideItem>
          </S.Aside>
        </S.MainContainer>
      </S.Container>
    </>
  )
}
export default ReservationHistoryPage
