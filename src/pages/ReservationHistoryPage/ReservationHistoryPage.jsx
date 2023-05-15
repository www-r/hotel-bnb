import React, { useContext, useEffect } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import Header from '@/components/Common/Header/Header'
import ReservedRoom from '@/components/Room/RoomItem/ReservedRoom'
import * as S from '@/pages/ReservationHistoryPage/ReservationHistoryPage.style'
import { ChevronRight, PaymentIcon } from '../../assets/images'
import { getUserInfo, useGetUserInfo } from '../../hooks/useGetUserInfo'
import { LoginContext } from '../../contexts/LoginProvider'
const ReservationHistoryPage = () => {
  const queryClient = useQueryClient()
  const func = async () => {
    const data = queryClient.getQueryData('uid')
    const userInfo = await getUserInfo(data)
    console.log(userInfo)
  }
  func()
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
            <ReservedRoom />
            <ReservedRoom />
            <ReservedRoom />
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
