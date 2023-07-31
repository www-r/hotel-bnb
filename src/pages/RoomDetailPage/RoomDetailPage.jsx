import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ref } from '@firebase/storage'
import { storage } from '../../firebase'
import 'react-day-picker/dist/style.css'
import Header from '@/components/Common/Header/Header'
import Calendar from '@/components/Common/Calendar/Calendar'
import MapList from '@/components/Map/MapList/MapList'
import ReservationCard from '@/components/RoomDetail/ReservationCard'
import Footer from '@/components/Common/Footer/Footer'

import { HeartIcon, ShareIcon, ChevronRight } from '@/assets/images/index.js'

import * as S from './RoomDetailPage.style' // @ 쓰면 에러남
import RoomDetailModal from '../../components/Common/Modal/RoomDetail/RoomDetailModal'
// import './RoomDetailPage.css'
import { AmenitiesData } from '../../constants/amenities'
const RoomDetailPage = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const [title, setTitle] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const room = location.state
  const roomPrice = room.price
  const rates = room?.rates
  const calculateRating = (rates) => {
    try {
      let sum = 0
      for (let rate of rates) {
        sum += rate
      }
      const average = sum / rates.length
      return average
    } catch (error) {
      console.log('why???????:', error)
    }
  }
  const rating = calculateRating(rates)
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [roomPaymentData, setRoomPaymentData] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfPeople: 1,
    roomDays: 0,
    roomTotalPrice: 0,
    roomExtraFee: 0,
    roomTax: 0,
    roomRating: 0,
  })
  const bringPaymentData = (data) => {
    setRoomPaymentData(data)
    return data
  }
  const handleShareBtn = () => {
    if (navigator.clipboard) {
      const text = 'localhost:3000' + location.pathname
      alert(`${text}을/를 복사하시겠습니까?`)
      navigator.clipboard.writeText(text)
    } else {
      console.log('브라우저에서 지원하지 못합니다.')
    }
  }
  const handleNavigateToPayMentPage = (data) => {
    navigate(`/book/${room.id}`, {
      state: { room, data },
    })
  }
  const handleReservationBtn = (data) => {
    if (!(checkInDate && checkOutDate)) {
      alert('날짜를 선택해주세요')
    } else if (numberOfPeople > room.maxNumber || numberOfPeople === 0) {
      alert('인원을 다시 설정해주세요')
    } else {
      handleNavigateToPayMentPage(data)
    }
  }
  const fixScrollEvent = () => {
    document.body.style.overflow = 'hidden'
  }
  // useEffect(() => {
  //   console.log(ref(storage, 'rooms'))
  // }, [])
  return (
    <>
      {modalOpened && title === '숙소 이용규칙' && (
        <RoomDetailModal title={title} maxNum={room.maxNumber} setModalOpened={setModalOpened} />
      )}
      {modalOpened && title === '안전 및 숙소' && (
        <RoomDetailModal
          title={title}
          carbonMonoxideAlert={room.safety.carbonMonoxideAlert}
          fireAlert={room.safety.fireAlert}
          setModalOpened={setModalOpened}
        />
      )}
      <Header />
      <S.Inner>
        <S.Main>
          <div className="main-top">
            <S.TitleSection>
              <h1 className="title">{room.title}</h1>
              <div className="title-desc">
                <div className="title-desc--left">
                  <div className="rating">★{rating}</div>
                  <span>·</span>
                  <span>{room.location}</span>
                </div>
                <div className="title-desc--right">
                  <div className="buttons">
                    <S.Button onClick={handleShareBtn}>
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
            <S.DivisionLineRow />
            <S.ImagesSection>
              <div className="images-container">
                <S.ImageThumbnail thumbnail={room.thumbnail} />
                <div className="images-wrapper">
                  <S.ImageDetail />
                  <S.ImageDetail />
                  <S.ImageDetail />
                  <S.ImageDetail />
                </div>
              </div>
            </S.ImagesSection>
          </div>
          <S.DivisionLineRow />
          <div className="main-middle">
            <S.MainSection>
              <div className="description-item room--detail-explanation">
                <h2>숙소 소개</h2>
                <p>{room.description}</p>
              </div>
              <S.DivisionLineRow />
              <div className="description-item room--amenities">
                <h2>숙소 편의시설</h2>
                {/* <ul className="room--amenities-list">
                    {AmenitiesData.filter((data) => {}).map(({ img, text }) => {
                      return (
                        <li className="room--amenity" key={index} src={img}>
                          {text}
                        </li>
                      )
                    })}
                  </ul> */}
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
              <S.DivisionLineRow />
              <S.MapSection div className="description-item">
                <h2>호스팅 지역</h2>
                <MapList rooms={[room]} size={{ width: '100%', height: '400px' }} />
              </S.MapSection>
            </S.MainSection>
            <S.AsideSection className="reservation">
              <ReservationCard
                roomPricePerDay={roomPrice}
                rates={rates}
                roomRating={rating}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                numberOfPeople={numberOfPeople}
                setNumberOfPeople={setNumberOfPeople}
                handleReservationBtn={handleReservationBtn}
                bringPaymentData={bringPaymentData}
              />
            </S.AsideSection>
          </div>
          <div className="main-bottom">
            <S.DivisionLineRow />
            <S.NeedToKnowSection className="description-item">
              <h2>알아두어야 할 사항</h2>
              <div className="need-to-know-lists">
                <div className="need-to-know--list">
                  <h3>숙소 이용규칙</h3>
                  <p>체크인 가능 시간: 오후 12:00 이후</p>
                  <p>체크아웃 시간: 오전 10:00 전까지</p>
                  <p>게스트 정원 {room.maxNumber}명</p>
                  <S.UnderlinedButton
                    onClick={() => {
                      setTitle('숙소 이용규칙')
                      setModalOpened(true)
                      fixScrollEvent()
                    }}
                  >
                    더보기
                    <ChevronRight />
                  </S.UnderlinedButton>
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
                </div>
                <div className="need-to-know--list">
                  <h3>환불 정책</h3>
                  <p>예약 이후에는 환불이 불가합니다.</p>
                </div>
              </div>
            </S.NeedToKnowSection>
          </div>
        </S.Main>
      </S.Inner>
      <Footer />
    </>
  )
}

export default RoomDetailPage
