import React, { useState, useEffect, useContext, useRef } from 'react'
import Footer from '@/components/Common/Footer/Footer'
import Header from '@/components/Common/Header/Header'
import * as S from './PersonalInfoPage.style'
import { ChevronRight, Eye, PersonalInfoLock1, PersonalInfoLock2 } from '../../assets/images'
import { getAuth, deleteUser } from 'firebase/auth'
import { getDatabase, ref, update } from 'firebase/database'
import { changePassword } from '../../firebase'
import { UserContext } from '@/contexts/UserProvider'
import { LoginContext } from '@/contexts/LoginProvider'

const PersonalInfoPage = () => {
  const [isShown1, setIsShown1] = useState(false)
  const [isShown2, setIsShown2] = useState(false)
  const currentUser = useContext(LoginContext)
  const userCtx = useContext(UserContext)
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
    e.preventDefault()
    const user = getAuth().currentUser
    // console.log(user)
    await deleteUser(user)
    alert('삭제 성공!')
  }
  console.log(currentUser)
  return (
    <>
      <Header />
      <S.Container>
        <S.PageTitle>
          <div>
            <a href="#"> 계정 </a>
            <ChevronRight />
            <span> 개인정보 </span>
          </div>
          <S.PageTitleTitle>개인정보</S.PageTitleTitle>
        </S.PageTitle>

        <S.MainContainer>
          <S.Main>
            <S.ListItem>
              <h3>이름</h3>
              <S.ListItemContent>{userCtx.name}</S.ListItemContent>
            </S.ListItem>
            <S.DivisionLineRow />
            <S.ListItem>
              <h3>이메일 주소</h3>
              <S.ListItemContent>{userCtx.email}</S.ListItemContent>
            </S.ListItem>
            <S.DivisionLineRow />
            <S.ListItem>
              <S.ListWrapper>
                <h3>비밀번호</h3>
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
              </S.ListWrapper>
              {isShown1 ? (
                <S.ListItemContent>
                  <S.InputLabel>새로운 비밀번호</S.InputLabel>
                  <S.InputsContainer className="newPassword">
                    <input ref={(element) => (inputArr.current[0] = element)}></input>
                    <S.ListItemBtn onClick={handlePassword}>수정</S.ListItemBtn>
                  </S.InputsContainer>
                </S.ListItemContent>
              ) : (
                <S.ListItemContent></S.ListItemContent>
              )}
            </S.ListItem>
            <S.DivisionLineRow />
            <S.ListItem>
              <S.ListWrapper>
                <h3>전화번호</h3>
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
              </S.ListWrapper>
              {/* <p>{userCtx.phoneNumber ? userCtx.phoneNumber : '없음'}</p> */}
              <S.ListItemContent>
                {userCtx.phoneNumber ? userCtx.phoneNumber : '없음'}
                {isShown2 ? (
                  <>
                    <S.InputLabel>새로운 전화번호</S.InputLabel>
                    <S.InputsContainer className="newPhoneNumber">
                      <input ref={(element) => (inputArr.current[1] = element)} type="tel"></input>
                      <S.ListItemBtn type="submit" onClick={handlePhoneNumber}>
                        수정
                      </S.ListItemBtn>
                    </S.InputsContainer>
                  </>
                ) : (
                  <></>
                )}
              </S.ListItemContent>
            </S.ListItem>
            <S.DivisionLineRow />
            <S.ListItem>
              <S.ListWrapper>
                <h3>계정 삭제</h3>
                <S.ListItemBtn onClick={handleAccountDelete}>삭제</S.ListItemBtn>
              </S.ListWrapper>
              <S.ListItemContent>삭제 완료 후에는 복구 하실 수 없습니다.</S.ListItemContent>
            </S.ListItem>
            <S.DivisionLineRow />
          </S.Main>

          <S.Aside>
            <S.AsideItem>
              <Eye />
              <h3>여기에 내 개인정보가 표시되지 않는 이유가 무엇인가요?</h3>
              <p>신분이 노출되지 않도록 일부 계정 정보가 숨김 처리되었습니다.</p>
            </S.AsideItem>

            <S.AsideItem>
              <PersonalInfoLock1 />
              <h3>수정할 수 있는 세부 정보는 무엇인가요?</h3>
              <p>
                에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다. 연락처 정보와
                일부 개인정보는 수정할 수 있지만, 다음번 예약 또는 숙소를 등록할 때 본인 인증 절차를
                거쳐야 할 수도 있습니다.
              </p>
            </S.AsideItem>

            <S.AsideItem>
              <PersonalInfoLock2 />
              <h3>다른 사람에게 어떤 정보가 공개되나요?</h3>
              <p>에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를 공개합니다.</p>
            </S.AsideItem>
          </S.Aside>
        </S.MainContainer>
      </S.Container>
      <Footer />
    </>
  )
}

export default PersonalInfoPage
