import React from 'react'
import usePayReady from '@/hooks/usePayReady'
import { useLocation } from 'react-router-dom'
import * as S from './PaymentPage.style'
import HeaderLogo from '../../components/Common/Header/HeaderLogo'
import Footer from '@/components/Common/Footer'
import { IconKakaoPay, IconNotice, IconPrevious, ImagePayButton } from '../../assets/images'

const PaymentPage = () => {
  const location = useLocation()
  const room = location.state
  console.log('room', location.state)

  const { postKaKaoPay } = usePayReady()

  const kakaoPayData = {
    cid: 'TC0ONETIME',
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    item_name: room.title,
    quantity: 1,
    total_amount: room.price,
    vat_amount: Math.floor(room.price / 10),
    tax_free_amount: 0,
    approval_url: 'http://localhost:3000/paymentWaiting',
    fail_url: 'http://localhost:3000/paymentFail',
    cancel_url: 'http://localhost:3000/paymentFail',
  }

  const handleClick = () => {
    postKaKaoPay(kakaoPayData)
    localStorage.setItem(`paymentRoom`, JSON.stringify(room))
  }

  return (
    <>
      <S.Container>
        <S.Header>
          <HeaderLogo />
        </S.Header>
        <S.TitleContainer>
          <S.PreviousButton>
            <IconPrevious />
          </S.PreviousButton>
          <p>예약 하기</p>
        </S.TitleContainer>
        <S.ContentContainer>
          <S.BookInfoWrapper>
            <S.BookTitleDiv>예약 정보</S.BookTitleDiv>
            <S.BookDateDiv>
              <S.DateDiv>
                <h3>날짜</h3>
                <p>4월~5월</p>
              </S.DateDiv>
              <S.EditButton>수정</S.EditButton>
            </S.BookDateDiv>
            <S.BookGuestDiv>
              <S.GuestDiv>
                <h3>게스트</h3>
                <p>게스트 1명</p>
              </S.GuestDiv>
              <S.EditButton>수정</S.EditButton>
            </S.BookGuestDiv>
            <S.PaymentDiv>
              <S.PaymentTitle>
                결제수단
                <S.ImageContainer>
                  <IconKakaoPay />
                </S.ImageContainer>
              </S.PaymentTitle>
              <S.KakaoImage src={ImagePayButton} />
              <S.NoticeKakao>
                <IconNotice />
                현재 결제수단으로 카카오페이만 사용가능합니다. 추후 추가될 예정입니다.
              </S.NoticeKakao>
            </S.PaymentDiv>
            <S.RequiredDiv>
              <S.RequiredTitle>필수 입력 정보</S.RequiredTitle>
              <S.RequiredInformDiv>
                <h3>관리자에게 메시지 보내기</h3>
                <p>관리자에게 여행 목적과 도착 예정 시간을 알려주세요.</p>
              </S.RequiredInformDiv>
              <textarea
                style={{ resize: 'vertical', width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </S.RequiredDiv>
            <S.RefundDiv style={{ wordBreak: 'keep-all' }}>
              <S.RefundTitle>환불 정책</S.RefundTitle>
              <p>
                <strong>5월 5일 전까지 무료로 취소하실 수 있습니다.</strong> 체크인 날짜인 6월 4일
                전에 취소하면 부분 환불을 받으실 수 있습니다.
              </p>
            </S.RefundDiv>
            <S.RuleDiv style={{ wordBreak: 'keep-all' }}>
              <S.RuleTitle>기본 규칙</S.RuleTitle>
              <p>
                훌륭한 게스트가 되기 위한 몇 가지 간단한 규칙을 지켜주실 것을 모든 게스트에게
                당부드리고 있습니다.
              </p>
              <S.RuleInformDiv>
                <p>· 숙소 이용규칙을 준수하세요.</p>
                <p>· 호스트의 집도 자신의 집처럼 아껴주세요.</p>
              </S.RuleInformDiv>
            </S.RuleDiv>
            <S.NoticePaymentDiv style={{ wordBreak: 'keep-all' }}>
              아래 버튼을 선택하면 호스트가 설정한 숙소 이용규칙, 게스트에게 적용되는 기본 규칙,
              에어비앤비 재예약 및 환불 정책에 동의하며, 피해에 대한 책임이 본인에게 있을 경우
              에어비앤비가 결제 수단으로 청구의 조치를 취할 수 있다는 사실에 동의하는 것입니다.
              호스트가 예약 요청을 수락하면 표시된 총액이 결제되는 데 동의합니다.
              <br />
              <br />
              또한, 개정된 이용 약관과 결제 서비스 약관 및 개인정보 처리방침에도 동의합니다.
            </S.NoticePaymentDiv>
            <S.SubmitButtonDiv>
              <S.SubmitButton onClick={handleClick}>예약 하기</S.SubmitButton>
            </S.SubmitButtonDiv>
          </S.BookInfoWrapper>
          <S.PriceInfoWrapper></S.PriceInfoWrapper>
        </S.ContentContainer>
      </S.Container>
      <Footer />
    </>
  )
}

export default PaymentPage
