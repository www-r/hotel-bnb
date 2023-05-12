import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
// import { roomsRef, listAll } from '@/firebase.js'
//components
import Header from '@/components/Common/Header/Header'
import Footer from '@/components/Common/Footer/Footer'
import 'react-day-picker/dist/style.css'
import Calendar from '@/components/Common/Calendar/Calendar'
import ReservationCard from '@/components/RoomDetail/ReservationCard'
import { HeartIcon, ShareIcon, ChevronRight } from '@/assets/images/index.js'
//style
import * as S from './RoomDetailPage.style' // @ 쓰면 에러남
import RoomDetailModal from '../../components/RoomDetail/RoomDetailModal'
// import './RoomDetailPage.css'

const RoomDetailPage = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const [title, setTitle] = useState('')
  const location = useLocation()
  const room = location.state
  const navigate = useNavigate()

  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const handleNavigateToPayMentPage = () => {
    navigate(`/book/${room.id}`, {
      state: room,
    })
  }
  const fixScrollEvent = () => {
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      {/* <Header /> */}

      <S.Inner>
        {/* <button onClick={handleNavigateToPayMentPage}>예악하기</button> */}

        <S.Body>
          <S.TitleSection>
            <h1 className="title">{room.title}</h1>
            <div className="title-desc">
              <div className="title-desc--left">
                <div className="rating">★{room.rating}</div>
                <span>·</span>
                <span>{room.location}</span>
              </div>
              <div className="title-desc--right">
                <div className="buttons">
                  <S.Button>
                    <ShareIcon />
                    <span>공유하기</span>
                  </S.Button>
                  <S.Button>
                    <HeartIcon />
                    <span>저장</span>
                  </S.Button>
                </div>
              </div>
            </div>
          </S.TitleSection>
          <div className="images-container">
            <div className="image1"></div>
            <div className="images-wrapper">
              <div className="image2"></div>
              <div className="image3"></div>
            </div>
            <div className="images-wrapper">
              <div className="image4"></div>
              <div className="image5"></div>
            </div>
          </div>
          <S.DivisionLineRow />
          <S.Main>
            <div className="main-wrapper">
              <div className="descriptions-wrapper">
                <div className="description-item room--detail-explanation">
                  <h2>숙소 소개</h2>
                  <p>{room.description}</p>
                </div>
                <S.DivisionLineRow />
                <div className="description-item room--summary">
                  <h2>숙박 장소</h2>
                  <ul>
                    <li className="room--summary--item"></li>
                  </ul>
                </div>
                <S.DivisionLineRow />
                <div className="description-item room--amenities">
                  <h2>숙소 편의시설</h2>
                  <ul className="room--amenities-list">
                    {room.amenities.map((item, index) => {
                      return (
                        <li className="room--amenity" key={index}>
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <S.DivisionLineRow />
                <div className="description-item room--calendar">
                  <h2>체크인 날짜를 선택해주세요</h2>
                  <p>여행 날짜를 입력하여 정확한 요금을 확인하세요.</p>
                  <div className="calendar-container">
                    <Calendar
                      setCheckInDate={setCheckInDate}
                      setCheckOutDate={setCheckOutDate}
                      roomReservedDays={room.reservedDays}
                    />
                  </div>
                </div>
              </div>
              <S.Aside className="reservation">
                <ReservationCard
                  roomPricePerDay={room.price}
                  roomRating={room.rating}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                />
              </S.Aside>
            </div>
            <S.DivisionLineRow />
            <div className="description-item">
              <h2>호스팅 지역</h2>
            </div>
            <S.DivisionLineRow />
            <div className="description-item need-to-know-lists--container">
              <h2>알아두어야 할 사항</h2>
              <div className="need-to-know-lists-wrapper">
                <div className="need-to-know--list">
                  <h3>숙소 이용규칙</h3>
                  <p>체크인 가능 시간: 오후 12:00 이후</p>
                  <p>체크아웃 시간: 오전 10:00 전까지</p>
                  <p>게스트 정원 {room.maxNumber}명</p>
                  <S.UnderlinedButton
                    onClick={() => {
                      setTitle('숙소 이용규칙')
                      setModalOpened(true)
                      console.log(scrollY)

                      // fixScrollEvent()
                    }}
                  >
                    더보기
                    <ChevronRight />
                  </S.UnderlinedButton>
                  {modalOpened && title === '숙소 이용규칙' && (
                    <RoomDetailModal
                      title={title}
                      maxNum={room.maxNumber}
                      setModalOpened={setModalOpened}
                      scrollY={scrollY}
                    />
                  )}
                </div>
                <div className="need-to-know--list">
                  <h3>안전 및 숙소</h3>
                  <>
                    {room.safety.carbonMonoxideAlert ? (
                      <span>일산화탄소 경보기</span>
                    ) : (
                      <span>일산화탄소 경보기 설치 여부 정보 없음</span>
                    )}
                  </>
                  <>
                    {room.safety.fireAlert ? (
                      <span>화재경보기</span>
                    ) : (
                      <span>화재경보기 설치 여부 정보 없음</span>
                    )}
                  </>
                  <S.UnderlinedButton
                    onClick={() => {
                      setTitle('안전 및 숙소')
                      setModalOpened(true)
                      fixScrollEvent()
                    }}
                  >
                    더보기
                    <ChevronRight />
                  </S.UnderlinedButton>
                  {modalOpened && title === '안전 및 숙소' && (
                    <RoomDetailModal
                      title={title}
                      carbonMonoxideAlert={room.safety.carbonMonoxideAlert}
                      fireAlert={room.safety.fireAlert}
                      setModalOpened={setModalOpened}
                    />
                  )}
                </div>
                <div className="need-to-know--list">
                  <h3>환불 정책</h3>
                  <p>예약 이후에는 환불이 불가합니다.</p>
                </div>
              </div>
            </div>
          </S.Main>
        </S.Body>
      </S.Inner>
      <Footer />
    </>
  )
}

export default RoomDetailPage
