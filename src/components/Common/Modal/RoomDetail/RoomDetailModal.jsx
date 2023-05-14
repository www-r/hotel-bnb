import { CloseIcon } from '@/assets/images/index.js'
import React, { ReactDOM } from 'react'
import { createPortal } from 'react-dom'
import * as S from './RoomDetailModal.style'

const RoomDetailModal = (props) => {
  const title = props.title
  const maxNum = props?.maxNum
  const carbonMonoxideAlert = props?.carbonMonoxideAlert
  const fireAlert = props?.fireAlert
  const setModalOpened = props.setModalOpened

  return (
    <S.RoomDetailModal>
      <S.ModalHeader>
        <button
          onClick={(e) => {
            setModalOpened(false)
            document.body.style.overflow = ''
          }}
        >
          <CloseIcon />
        </button>
      </S.ModalHeader>
      <S.DivisionLine />
      <S.ModalMain>
        <h3>{props.title}</h3>
        {title === '숙소 이용규칙' ? (
          <>
            <p className="title-desc">
              호텔비앤비 숙소는 다른 사람이 실제로 거주하는 집인 경우가 많으므로, 숙소를 소중히
              다뤄주세요.
            </p>
            <div>
              <h4>숙소 이용규칙</h4>
              <ul>
                <li>체크인 가능 시간: 오후 12:00 이후</li>

                <li>체크아웃 시간: 오전 10:00 전까지</li>
              </ul>
            </div>
            <div>
              <h4>숙방 중</h4>
              <ul>
                <li>게스트 정원 {maxNum}명</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <p className="title-desc">
              나중에 당황하는 일이 없도록 호스트 숙소에 대한 중요 정보를 미리 확인하세요.
            </p>
            <div>
              <h4>안전장치</h4>
              <ul>
                <li>
                  {carbonMonoxideAlert ? (
                    <span>일산화탄소 경보기</span>
                  ) : (
                    <div>
                      <span>일산화탄소 경보기 설치 여부 정보 없음</span>
                      <p>
                        호스트가 숙소 내 일산화탄소 경보기 설치 여부를 보고하지 않았습니다. 휴대용
                        경보기를 챙겨가실 것을 권해드립니다.
                      </p>
                    </div>
                  )}
                </li>

                <li>
                  {fireAlert ? (
                    <span>화재경보기</span>
                  ) : (
                    <div>
                      <span>화재경보기 설치 여부 정보 없음</span>
                      <p>
                        호스트가 숙소 내 화재경보기 설치 여부를 보고하지 않았습니다. 휴대용
                        화재경보기를 챙겨가실 것을 권해드립니다.
                      </p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </>
        )}
      </S.ModalMain>
    </S.RoomDetailModal>
  )
}
// const RoomDetailModal = ({title, maxNum, setModalOpened, scrollY}) => {
//   return (
//     <>
//       {ReactDOM.createPortal(
//         <Modal
//           title={title}
//           maxNum={maxNum}
//           setModalOpened={setModalOpened}
//           scrollY={scrollY}
//         />,
//         document.getElementById('modal'),
//       )}
//     </>
//   )
// }

export default RoomDetailModal
