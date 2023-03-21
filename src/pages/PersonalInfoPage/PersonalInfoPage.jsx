import React from 'react'
import Footer from '@/components/Common/Footer'
import * as S from './PersonalInfoPage.style'
import { ChevronRight } from '../../assets/images'

const PersonalInfoPage = () => {
  return (
    <S.Container>
      <S.PageTitle>
        <div>
          <a href="#">계정</a>
          <ChevronRight />
          <span>개인정보</span>
        </div>
        <S.PageTitleTitle>개인정보</S.PageTitleTitle>
      </S.PageTitle>
      <S.MainContainer>
        <main>
          <S.ListItem>
            <S.ListItemWrapper>
              <span>실명</span>
              <S.ListItemBtn>수정</S.ListItemBtn>
            </S.ListItemWrapper>
            <div>YoungEun Kim</div>
            {/* <div className= listDetail>
              <p>허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다.</p>
              <div>
                <span>이름</span>
                <input type="text" />
              </div>
              <div>
                <span>성</span>
                <input type="text" />
              </div>
              <button>저장</button>
            </div> */}
          </S.ListItem>
          <S.ListItem>
            <S.ListItemWrapper>
              <span>이메일 주소</span>
              <S.ListItemBtn button>수정</S.ListItemBtn>
            </S.ListItemWrapper>
            <div></div>
            {/* <div className= listDetail>
              <p>언제든지 확인하실 수 있는 주소를 사용하세요</p>
              <div>
                <span>이메일 주소</span>
                <input type="text" />
              </div>
              <button>저장</button>
            </div> */}
          </S.ListItem>
          <S.ListItem>
            <S.ListItemWrapper>
              <span>전화번호</span>
              <S.ListItemBtn button>수정</S.ListItemBtn>
            </S.ListItemWrapper>
            <div></div>
            {/* <div classNamelistDetail>
              <p>알림, 미리 알림 및 로그인에 도움이 됩니다. </p>
              <div>
                <span>전화번호</span>
                <input type="number" />
              </div>
              <p>전화번호 인증 코드를 보내드리겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.</p>
              <button>인증</button>
            </div> */}
          </S.ListItem>
          <S.ListItem>
            <S.ListItemWrapper>
              <span>주소</span>
              <S.ListItemBtn button>수정</S.ListItemBtn>
            </S.ListItemWrapper>
            <div></div>
          </S.ListItem>
        </main>
        <S.Aside>
          <S.AsideItem>
            <img src="" alt="" />
            <S.AsideItemQuestion>여기에 내 개인정보가 표시되지 않는 이유가 무엇인가요?</S.AsideItemQuestion>
            <S.AsideItemP>신분이 노출되지 않도록 일부 계정 정보가 숨김 처리되었습니다.</S.AsideItemP>
          </S.AsideItem>
          <S.AsideItem>
            <img src="" alt="" />
            <S.AsideItemQuestion>수정할 수 있는 세부 정보는 무엇인가요?</S.AsideItemQuestion>
            <S.AsideItemP>
              에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다. 연락처 정보와 일부 개인정보는 수정할
              수 있지만, 다음번 예약 또는 숙소를 등록할 때 본인 인증 절차를 거쳐야 할 수도 있습니다.
            </S.AsideItemP>
          </S.AsideItem>
          <S.AsideItem>
            <img src="" alt="" />
            <S.AsideItemQuestion>다른 사람에게 어떤 정보가 공개되나요?</S.AsideItemQuestion>
            <S.AsideItemP>에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를 공개합니다.</S.AsideItemP>
          </S.AsideItem>
        </S.Aside>
      </S.MainContainer>
      <Footer />
    </S.Container>
  )
}

export default PersonalInfoPage
