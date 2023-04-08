import styled from '@emotion/styled'

export const Container = styled.div`
  width: 1280px;
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
  /* border: 1px solid; */
  width: 50%;
`
export const PriceInfoWrapper = styled.div`
  position: sticky;
  top: 80px;
  border: 1px solid;
  width: 41.666%;
  margin-left: 8.333%;
  height: 500px;
`

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
  background-color: var(--color-main);
  color: #fff;
  border-radius: 10px;
`
