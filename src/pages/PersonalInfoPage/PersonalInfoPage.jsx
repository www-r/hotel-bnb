import React, { useState, useEffect, useContext, useRef } from 'react'
import Footer from '@/components/Common/Footer/Footer'
import Header from '@/components/Common/Header/Header'
import * as S from './PersonalInfoPage.style'
import { ChevronRight, Eye, PersonalInfoLock1, PersonalInfoLock2 } from '../../assets/images'
import { getAuth, deleteUser } from 'firebase/auth'
import { getDatabase, ref, update } from 'firebase/database'
import { changePassword } from '../../firebase'
import { UserContext } from '@/contexts/UserProvider'

const PersonalInfoPage = () => {
  const [isShown1, setIsShown1] = useState(false)
  const [isShown2, setIsShown2] = useState(false)

  const userInfo = useContext(UserContext)
  const inputArr = useRef([])

  const handlePassword = async (e) => {
    e.preventDefault()
    const newPassword = inputArr.current[0].value
    const user = getAuth().currentUser
    console.log(user)
    await changePassword(user, newPassword)
    alert('비밀번호 수정 완료')
  }

  const handlePhoneNumber = async (e) => {
    e.preventDefault()
    const db = getDatabase()
    const userId = getAuth().currentUser.uid
    const phoneNumberInput = inputArr.current[1].value
    await update(ref(db, 'users/' + userId), {
      phoneNumber: phoneNumberInput,
    })
    alert('전화번호 변경 완료')
  }
  const handleAccountDelete = async (e) => {
    const user = getAuth().currentUser
    e.preventDefault()
    await deleteUser(user)
    alert('삭제 성공!')
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
                  <div className="newPassword">
                    <input ref={(element) => (inputArr.current[0] = element)}></input>
                    <S.ListItemBtn onClick={handlePassword}>수정</S.ListItemBtn>
                  </div>
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
                    <input ref={(element) => (inputArr.current[1] = element)}></input>
                    <S.ListItemBtn type="submit" onClick={handlePhoneNumber}>
                      수정
                    </S.ListItemBtn>
                  </form>
                </S.ListItemContent>
              ) : (
                <S.ListItemContent></S.ListItemContent>
              )}
            </S.ListItem>
            <S.ListItem>
              <S.ListItemTitle>
                <span>계정 삭제</span>
                <S.ListItemBtn onClick={handleAccountDelete}>삭제</S.ListItemBtn>
              </S.ListItemTitle>
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
