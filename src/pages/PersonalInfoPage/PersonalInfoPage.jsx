import React, { useState } from 'react'
import Footer from '@/components/Common/Footer'
import * as S from './PersonalInfoPage.style'
import { ChevronRight, Eye, PersonalInfoLock1, PersonalInfoLock2 } from '../../assets/images'

const PersonalInfoPage = () => {
  const [isShown1, setIsShown1] = useState(false)
  const [isShown2, setIsShown2] = useState(false)
  const [isShown3, setIsShown3] = useState(false)
  const [isShown4, setIsShown4] = useState(false)

  return (
    <div>
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
          <S.Main>
            <S.ListItem>
              <S.ListItemTitle>
                <span>실명</span>
                {!isShown1 ? (
                  <S.ListItemBtn
                    onClick={() => {
                      setIsShown1(!isShown1)
                    }}
                  >
                    수정
                  </S.ListItemBtn>
                ) : (
                  <S.ListItemBtn
                    onClick={() => {
                      setIsShown1(!isShown1)
                    }}
                  >
                    취소
                  </S.ListItemBtn>
                )}
              </S.ListItemTitle>

              {isShown1 ? (
                <S.ListItemContent>
                  <p>허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다.</p>
                  <S.InputWrapper>
                    <div>
                      <span>이름</span>
                      <input type="text" />
                    </div>
                    <div>
                      <span>성</span>
                      <input type="text" />
                    </div>
                  </S.InputWrapper>
                  <S.ContentBtn>저장</S.ContentBtn>
                </S.ListItemContent>
              ) : (
                <S.ListItemContent>
                  <p>YoungEun Kim</p>
                </S.ListItemContent>
              )}
            </S.ListItem>

            <S.ListItem>
              <S.ListItemTitle>
                <span>이메일 주소</span>
                {!isShown2 ? (
                  <S.ListItemBtn
                    onClick={() => {
                      setIsShown2(!isShown2)
                    }}
                  >
                    수정
                  </S.ListItemBtn>
                ) : (
                  <S.ListItemBtn
                    onClick={() => {
                      setIsShown2(!isShown2)
                    }}
                  >
                    취소
                  </S.ListItemBtn>
                )}
              </S.ListItemTitle>

              {isShown2 ? (
                <S.ListItemContent>
                  <div>
                    <p>언제든지 확인하실 수 있는 주소를 사용하세요</p>
                    <span>이메일 주소</span>
                    <input type="text" />
                  </div>
                  <S.ContentBtn>저장</S.ContentBtn>
                </S.ListItemContent>
              ) : (
                <S.ListItemContent>
                  <p>inmein@naver.com</p>
                </S.ListItemContent>
              )}
            </S.ListItem>

            <S.ListItem>
              <S.ListItemTitle>
                <span>전화번호</span>
                {!isShown3 ? (
                  <S.ListItemBtn
                    onClick={() => {
                      setIsShown3(!isShown3)
                    }}
                  >
                    수정
                  </S.ListItemBtn>
                ) : (
                  <S.ListItemBtn
                    onClick={() => {
                      setIsShown3(!isShown3)
                    }}
                  >
                    닫기
                  </S.ListItemBtn>
                )}
              </S.ListItemTitle>
              {!isShown3 ? (
                <S.ListItemContent>
                  <p>010-7475-2318</p>
                </S.ListItemContent>
              ) : (
                <S.ListItemContent>
                  <p>알림, 미리 알림 및 로그인에 도움이 됩니다.</p>
                  <div>
                    <div>010-7475-2318</div>
                    <S.ListItemBtn>수정</S.ListItemBtn>
                  </div>
                  <S.ContentBtn>다른 전화번호 추가</S.ContentBtn>
                </S.ListItemContent>
              )}
            </S.ListItem>
            {/* <S.ListItem>
              <S.ListItemTitle>
                <span>주소</span>
                <S.ListItemBtn>수정</S.ListItemBtn>
              </S.ListItemTitle>
              <S.ListItemContent>
                <div></div>
              </S.ListItemContent>
            </S.ListItem> */}
          </S.Main>
          <S.Aside>
            <S.AsideItem>
              <Eye />
              <S.AsideItemQuestion>여기에 내 개인정보가 표시되지 않는 이유가 무엇인가요?</S.AsideItemQuestion>
              <S.AsideItemP>신분이 노출되지 않도록 일부 계정 정보가 숨김 처리되었습니다.</S.AsideItemP>
            </S.AsideItem>
            <S.DivisionLine />
            <S.AsideItem>
              <PersonalInfoLock1 />
              <S.AsideItemQuestion>수정할 수 있는 세부 정보는 무엇인가요?</S.AsideItemQuestion>
              <S.AsideItemP>
                에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다. 연락처 정보와 일부 개인정보는
                수정할 수 있지만, 다음번 예약 또는 숙소를 등록할 때 본인 인증 절차를 거쳐야 할 수도 있습니다.
              </S.AsideItemP>
            </S.AsideItem>
            <S.DivisionLine />
            <S.AsideItem>
              <PersonalInfoLock2 />
              <S.AsideItemQuestion>다른 사람에게 어떤 정보가 공개되나요?</S.AsideItemQuestion>
              <S.AsideItemP>
                에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를 공개합니다.
              </S.AsideItemP>
            </S.AsideItem>
          </S.Aside>
        </S.MainContainer>
      </S.Container>
      <Footer />
    </div>
  )
}

export default PersonalInfoPage
