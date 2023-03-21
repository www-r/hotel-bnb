import React from 'react'
import './Footer.css'
// import { FooterIconBlog, FooterIconFacebook, FooterIconInstagram, FooterIconTwitter } from '@/assets/index.js'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop footerItem">
        <div className="footerTopItem">
          <h3>에어비앤비 지원</h3>
          <span>도움말 센터</span>
          <span>에어커버</span>
          <span>장애인 지원</span>
          <span>예약 취소 옵션</span>
          <span>에어비앤비의 코로나19 대응 방안</span>
          <span>이웃 민원 신고</span>
        </div>
        <div className="footerTopItem">
          <h3>커뮤니티</h3>
          <span>Airbnb.org"재난 구호 숙소</span>
          <span>차별 철폐를 위한 노력</span>
        </div>
        <div className="footerTopItem">
          <h3>호스팅</h3>
          <span>당신의 공간을 에어비앤비하세요</span>
          <span>호스트를 위한 에어커버</span>
          <span>호스팅 자료 둘러보기</span>
          <span>커뮤니티 포럼 방문하기</span>
          <span>책임감 있는 호스팅</span>
        </div>
        <div className="footerTopItem">
          <h3>에어비앤비</h3>
          <span>뉴스룸</span>
          <span>새로운 기능에 대해 알아보기</span>
          <span>에어비앤비 공동창업자의 메세지</span>
          <span>채용정보</span>
          <span>투자자 정보</span>
        </div>
      </div>
      <div className="footerBtm footerItem">
        <div className="footerBtmWrapper">
          <div className="footerInfo">
            <span>© 2023 Airbnb, Inc</span>
            <span>개인정보 처리방침</span>
            <span>이용약관</span>
            <span>사이트맵</span>
            <span>한국의 변경된 환불 정책</span>
            <span>회사 세부정보</span>
          </div>
          <div>
            <img src="" alt="facebook" />
            <img src="" alt="twitter" />
            <img src="" alt="instagram" />
            <img src="" alt="naver blog" />
            <img src="{}" alt="github" />
          </div>
        </div>
        <div className="footerCopyrightText">
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland |
          이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 |
          연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는
          통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.
          에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </div>
      </div>
    </div>
  )
}

export default Footer
