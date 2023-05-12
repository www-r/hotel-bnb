import React, { useState } from 'react'
import usePayReady from '@/hooks/usePayReady'
import { useLocation } from 'react-router-dom'
import * as S from './PaymentPage.style'
import Logo from '../../components/Common/Logo'
import Footer from '@/components/Common/Footer/Footer'
import {
  IconKakaoPay,
  IconNotice,
  IconPrevious,
  IconStar,
  ImagePayButton,
} from '../../assets/images'
import { BiBadgeCheck } from 'react-icons/bi'

const PaymentPage = () => {
  const location = useLocation()
  const room = location.state
  console.log('room', location.state)

  const [value, setValue] = useState('')

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
    if (!value.text) {
      return
    } else if (confirm('예약 확정 하시겠습니까?')) {
      postKaKaoPay(kakaoPayData)
      localStorage.setItem(`paymentRoom`, JSON.stringify(room))
    }
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
    console.log(value.text)
  }

  return (
    <>
      <S.Container>
        <S.Header>
          <Logo />
        </S.Header>
        <S.TitleContainer>
          <S.PreviousButton>
            <IconPrevious />
          </S.PreviousButton>
          <p>예약 하기</p>
        </S.TitleContainer>
        <S.ContentContainer>
          {/* 예약 정보 */}
          <S.BookInfoWrapper>
            <S.BookTitleDiv>예약 정보</S.BookTitleDiv>
            <S.BookDateDiv>
              <S.DateDiv>
                <h3>날짜</h3>
                <p>{4}~{5}</p>
              </S.DateDiv>
              <S.EditButton>수정</S.EditButton>
            </S.BookDateDiv>
            <S.BookGuestDiv>
              <S.GuestDiv>
                <h3>게스트</h3>
                <p>게스트 {1}명</p>
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
                onChange={handleChange}
                name="text"
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
              호텔비앤비 재예약 및 환불 정책에 동의하며, 피해에 대한 책임이 본인에게 있을 경우
              호텔비앤비가 결제 수단으로 청구의 조치를 취할 수 있다는 사실에 동의하는 것입니다.
              호스트가 예약 요청을 수락하면 표시된 총액이 결제되는 데 동의합니다.
              <br />
              <br />
              또한, 개정된 이용 약관과 결제 서비스 약관 및 개인정보 처리방침에도 동의합니다.
            </S.NoticePaymentDiv>
            <S.SubmitButtonDiv>
              <S.SubmitButton state={value.text} onClick={handleClick}>
                예약 하기
              </S.SubmitButton>
            </S.SubmitButtonDiv>
          </S.BookInfoWrapper>
          {/* 결제 정보 */}
          <S.PriceInfoWrapper>
            <S.PriceTitleContent>
              <S.TitleImageContainer>
                <S.TitleImage src={room.thumbnail} />
              </S.TitleImageContainer>
              <S.TitleInformContainer>
                <S.PriceTitle>
                  <h1>{room.tags ? room.tags : '없음'}</h1>
                </S.PriceTitle>
                <S.PriceRoomTitle>
                  <BiBadgeCheck />
                  <p>{room.title}</p>
                </S.PriceRoomTitle>
                <S.PriceRoomRate>
                  <IconStar />
                  <p>
                    {4.5} 점 · 후기 {4} 개
                  </p>
                </S.PriceRoomRate>
              </S.TitleInformContainer>
            </S.PriceTitleContent>
            <S.PriceDetailDiv>
              <S.PriceDetailTitle>요금 세부 정보</S.PriceDetailTitle>
              <S.PriceDetialContent>
                <S.BeforeCalc>₩{room.price.toLocaleString()} x {3}일</S.BeforeCalc>
                <S.AfterCalc>{1234}</S.AfterCalc>
              </S.PriceDetialContent>
              <S.PriceDetialContent>
                <p>서비스 수수료(계산된 금액의 7%)</p>
                <p>{1234}</p>
              </S.PriceDetialContent>
              <S.PriceDetialContent>
                <p>세금(계산된 금액의 2%)</p>
                <p>{123}</p>
              </S.PriceDetialContent>
              <S.FinallyCalc>
                <S.PriceDetialContent>
                  <p>
                    <strong>총 합계</strong>
                  </p>
                  <p>
                    <strong>{12334}</strong>
                  </p>
                </S.PriceDetialContent>
              </S.FinallyCalc>
              <S.PriceNotice>
                해외에서 결제가 처리되기 때문에 카드 발행사에서 추가 수수료를 부과할 수 있습니다.
              </S.PriceNotice>
            </S.PriceDetailDiv>
          </S.PriceInfoWrapper>
        </S.ContentContainer>
      </S.Container>
      <Footer />
    </>
  )
}

export default PaymentPage
