import styled from '@emotion/styled'

export const Container = styled.div`
  min-width: 743px;
  margin: 0 auto;
  padding: 0 80px;
`
export const Header = styled.header`
  height: 80px;
  border-bottom: 1px solid #ddd;
`

export const TitleContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
`

export const PreviousButton = styled.button`
  width: 48px;
  height: 48px;
  background-color: transparent;
  padding-right: 32px;
`

export const ContentContainer = styled.div`
  margin: 30px 0 200px 0;
  display: flex;
`

export const BookInfoWrapper = styled.div`
  width: 50%;
`
export const PriceInfoWrapper = styled.div`
  position: sticky;
  top: 80px;
  width: 41.666%;
  margin-left: 8.333%;
  padding: 24px;
  height: 40%;
  border: 1px solid #ddd;
  border-radius: 12px;
`

// 예약 정보 Wrapper
export const BookTitleDiv = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 600;
`

export const BookDateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const DateDiv = styled.div``

export const EditButton = styled.button`
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
`

export const BookGuestDiv = styled(BookDateDiv)``
export const GuestDiv = styled(DateDiv)``

export const PaymentDiv = styled.div`
  padding-top: 30px;
  border-top: 1px solid #ddd;
  margin-bottom: 30px;
`
export const PaymentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 600;
`

export const ImageContainer = styled.div`
  width: 80px;
  border-radius: 10px;
`

export const KakaoImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 10px 0;
`

export const NoticeKakao = styled.p`
  display: flex;
  gap: 7px;
  color: #c13515;
  font-size: 12px;
  font-weight: 600;
`

export const RequiredDiv = styled(PaymentDiv)``
export const RequiredTitle = styled(PaymentTitle)``
export const RequiredInformDiv = styled.div`
  margin: 15px 0;
`

export const RefundDiv = styled(PaymentDiv)``
export const RefundTitle = styled(PaymentTitle)`
  margin-bottom: 15px;
`

export const RuleDiv = styled(PaymentDiv)`
  font-weight: 600;
`
export const RuleTitle = styled(PaymentTitle)`
  margin-bottom: 15px;
`
export const RuleInformDiv = styled(RequiredInformDiv)`
  font-weight: 400;
`

export const NoticePaymentDiv = styled(PaymentDiv)`
  padding-top: 50px;
  font-size: 12px;
  font-weight: 600;
`

export const SubmitButtonDiv = styled.div`
  margin: 30px 0;
`
export const SubmitButton = styled.button`
  width: 140px;
  height: 60px;
  background-color: ${({ state }) => (state ? 'var(--color-main)' : '#ddd')};
  cursor: ${({ state }) => (state ? 'pointer' : 'not-allowed')};
  color: #fff;
  border-radius: 10px;
`

// export

// 결제정보 Wrapper
export const PriceTitleContent = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`

export const TitleImageContainer = styled.div``

export const TitleImage = styled.img`
  width: 124px;
  height: 106px;
  border-radius: 8px;
`

export const TitleInformContainer = styled.div``

export const PriceTitle = styled.div`
  font-size: 12px;
  color: #717171;
`
export const PriceRoomTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #222;
  margin-bottom: 50px;
`

export const PriceRoomRate = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`

export const PriceDetailDiv = styled(PaymentDiv)``
export const PriceDetailTitle = styled(PaymentTitle)``
export const PriceDetialContent = styled(RuleInformDiv)`
  display: flex;
  justify-content: space-between;
`
export const BeforeCalc = styled.div``
export const AfterCalc = styled.div``

export const FinallyCalc = styled(PaymentDiv)`
  padding-top: 10px;
  font-weight: bold;
`
export const PriceNotice = styled(PaymentDiv)``
