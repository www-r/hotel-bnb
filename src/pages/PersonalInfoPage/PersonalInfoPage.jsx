import React, { useState, useEffect, useContext, useReducer } from 'react'
import Footer from '@/components/Common/Footer'
import Header from '@/components/Common/Header/Header'
import * as S from './PersonalInfoPage.style'
import { ChevronRight, Eye, PersonalInfoLock1, PersonalInfoLock2 } from '../../assets/images'
import { axiosFirebase } from '@/apis/axios'
import axios from 'axios'
import { getUsersData, getPersonalInfo, deleteMyAccount } from '../../firebase'
import { UserContext } from '@/contexts/UserProvider'

const PersonalInfoPage = () => {
  const [isShown1, setIsShown1] = useState(false)
  const [isShown2, setIsShown2] = useState(false)
  const [isShown3, setIsShown3] = useState(false)
  const userInfo = useContext(UserContext)
  // {
  //  email: '',
  //  name: '',
  //  phoneNumber: '',
  //  profileImageURL: '',
  //  reservations: [],
  //  wishLists: [],
  //}

  const handlePasswords = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <>
      <Header />
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
              </S.ListItemTitle>
              <S.ListItemContent>
                <p>{userInfo.name}</p>
              </S.ListItemContent>
            </S.ListItem>

            <S.ListItem>
              <S.ListItemTitle>
                <span>이메일 주소</span>
              </S.ListItemTitle>
              <S.ListItemContent>
                <p>{userInfo.email}</p>
              </S.ListItemContent>
            </S.ListItem>

            <S.ListItem>
              <S.ListItemTitle>
                <span>비밀번호</span>
                {isShown1 ? (
                  <S.ListItemBtn
                    onClick={(e) => {
                      e.preventDefault()
                      setIsShown1(!isShown1)
                    }}
                  >
                    닫기
                  </S.ListItemBtn>
                ) : (
                  <S.ListItemBtn
                    onClick={(e) => {
                      e.preventDefault()
                      setIsShown1(!isShown1)
                    }}
                  >
                    수정
                  </S.ListItemBtn>
                )}
              </S.ListItemTitle>
              {isShown1 ? (
                <S.ListItemContent>
                  <span>새로운 비밀번호</span>
                  <form className="newPasswords" onSubmit={handlePasswords}>
                    <input></input>
                    <S.ListItemBtn type="submit">수정</S.ListItemBtn>
                  </form>
                </S.ListItemContent>
              ) : (
                <S.ListItemContent></S.ListItemContent>
              )}
            </S.ListItem>

            <S.ListItem>
              <S.ListItemTitle>
                <span>전화번호</span>

                {isShown2 ? (
                  <S.ListItemBtn
                    onClick={(e) => {
                      e.preventDefault()
                      setIsShown2(!isShown2)
                    }}
                  >
                    닫기
                  </S.ListItemBtn>
                ) : (
                  <S.ListItemBtn
                    onClick={(e) => {
                      e.preventDefault()
                      setIsShown2(!isShown2)
                    }}
                  >
                    수정
                  </S.ListItemBtn>
                )}
              </S.ListItemTitle>
              <span>{userInfo.phoneNumber}</span>
              {isShown2 ? (
                <S.ListItemContent>
                  <span>새로운 전화번호</span>
                  <form className="newPhoneNumber">
                    <input></input>
                    <S.ListItemBtn type="submit">수정</S.ListItemBtn>
                  </form>
                </S.ListItemContent>
              ) : (
                <S.ListItemContent></S.ListItemContent>
              )}
            </S.ListItem>
            <S.ListItem>
              <S.ListItemTitle>
                <span>계정 삭제</span>
                <S.ListItemBtn
                  onClick={(e) => {
                    e.preventDefault()
                    setIsShown3(!isShown3)
                  }}
                >
                  삭제
                </S.ListItemBtn>
              </S.ListItemTitle>

              {isShown3 ? (
                <S.ListItemContent>
                  <p>정말 삭제하겠습니까?</p>
                  <p>
                    <span>삭제하겠습니다</span>라고 똑같이 작성해주세요.
                  </p>
                  <input></input>
                  <button>삭제</button>
                </S.ListItemContent>
              ) : (
                <S.ListItemContent></S.ListItemContent>
              )}
            </S.ListItem>
          </S.Main>

          <S.Aside>
            <S.AsideItem>
              <Eye />
              <S.AsideItemQuestion>
                여기에 내 개인정보가 표시되지 않는 이유가 무엇인가요?
              </S.AsideItemQuestion>
              <S.AsideItemP>
                신분이 노출되지 않도록 일부 계정 정보가 숨김 처리되었습니다.
              </S.AsideItemP>
            </S.AsideItem>
            <S.DivisionLine />
            <S.AsideItem>
              <PersonalInfoLock1 />
              <S.AsideItemQuestion>수정할 수 있는 세부 정보는 무엇인가요?</S.AsideItemQuestion>
              <S.AsideItemP>
                에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다. 연락처 정보와
                일부 개인정보는 수정할 수 있지만, 다음번 예약 또는 숙소를 등록할 때 본인 인증 절차를
                거쳐야 할 수도 있습니다.
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
    </>
  )
}

export default PersonalInfoPage
