import * as S from './Footer.style'
import { GithubIcon, FacebookIcon, InstagramIcon, TwitterIcon } from '@/assets/images/index.js'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterTop>
        <S.FooterTopItem>
          <S.FooterTopItemTitle>호텔비앤비 지원</S.FooterTopItemTitle>
          <S.FooterTopItemText>도움말 센터</S.FooterTopItemText>
          <S.FooterTopItemText>장애인 지원</S.FooterTopItemText>
          <S.FooterTopItemText>호텔비앤비의 코로나19 대응 방안</S.FooterTopItemText>
          <S.FooterTopItemText>이웃 민원 신고</S.FooterTopItemText>
        </S.FooterTopItem>
        <S.FooterTopItem>
          <S.FooterTopItemTitle>커뮤니티</S.FooterTopItemTitle>
          <S.FooterTopItemText>Hotelbnb.org"재난 구호 숙소</S.FooterTopItemText>
          <S.FooterTopItemText>차별 철폐를 위한 노력</S.FooterTopItemText>
        </S.FooterTopItem>
        <S.FooterTopItem>
          <S.FooterTopItemTitle>호스팅</S.FooterTopItemTitle>
          <S.FooterTopItemText>당신의 공간을 호텔비앤비하세요</S.FooterTopItemText>
          <S.FooterTopItemText>호스팅 자료 둘러보기</S.FooterTopItemText>
          <S.FooterTopItemText>커뮤니티 포럼 방문하기</S.FooterTopItemText>
          <S.FooterTopItemText>책임감 있는 호스팅</S.FooterTopItemText>
        </S.FooterTopItem>
        <S.FooterTopItem>
          <S.FooterTopItemTitle>호텔비앤비</S.FooterTopItemTitle>
          <S.FooterTopItemText>뉴스룸</S.FooterTopItemText>
          <S.FooterTopItemText>새로운 기능에 대해 알아보기</S.FooterTopItemText>
          <S.FooterTopItemText>호텔비앤비 공동창업자의 메세지</S.FooterTopItemText>
          <S.FooterTopItemText>채용정보</S.FooterTopItemText>
          <S.FooterTopItemText>투자자 정보</S.FooterTopItemText>
        </S.FooterTopItem>
      </S.FooterTop>
      <S.DivisionLine />
      <S.FooterBtm>
        <S.FooterBtmWrapper>
          <div>
            <S.FooterInfo>© 2023 Hotelbnb, Inc</S.FooterInfo>
            <S.FooterInfo>개인정보 처리방침</S.FooterInfo>
            <S.FooterInfo>이용약관</S.FooterInfo>
            <S.FooterInfo>사이트맵</S.FooterInfo>
            <S.FooterInfo>회사 세부정보</S.FooterInfo>
          </div>
          <div className="footerIcons">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            {/* <GithubIcon /> */}
            <img src="@/assets/images/FooterIcons/github-mark.png" alt="" />
          </div>
        </S.FooterBtmWrapper>
        <S.DivisionLine />
        <S.FooterCopyrightText>
          웹사이트: Hotelbnb | 참여: 이찬영, 이병욱, 김영은 | 연락처: inmein@naver.com | 개인
          깃허브: https://github.com/www-r | 팀 깃허브: https://github.com/react-proejct/hotel-bnb |
          작업기간: 202304-202305 | 기술스택: React, ReactQuery, | 배포: versel | 사이트:
          www.hotelbnb.com
        </S.FooterCopyrightText>
      </S.FooterBtm>
    </S.Footer>
  )
}

export default Footer
