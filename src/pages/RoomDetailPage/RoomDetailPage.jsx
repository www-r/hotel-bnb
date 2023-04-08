import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '@/components/Common/Header/Header'
import Footer from '@/components/Common/Footer'
// import * as S from './RoomDetailpage.style' // @ 쓰면 에러남
import './RoomDetailPage.css'
import { DayPicker } from 'react-day-picker'
import { addYears, addMonths, format, isAfter, isBefore, isValid, parse } from 'date-fns'
import { ko } from 'date-fns/locale'
import 'react-day-picker/dist/style.css'

const RoomDetailPage = () => {
  const location = useLocation()

  const room = location.state
  const navigate = useNavigate()

  const handleNavigateToPayMentPage = () => {
    navigate(`/book/${room.id}`, {
      state: room,
    })
  }

  console.log(location.state)
  const today = new Date() //오늘 날짜
  const maximumDate = addYears(today, 2) //최대 렌더 날짜
  const disabledDays = [
    new Date(2022, 5, 20), //예약된 날짜
    { from: addMonths(today, 2), to: addYears(today, 2) }, //오늘로부터 2개월 뒤부터는 선택 불가능
  ]
  const handleResetCalendar = () => {
    setSelectedRange({ from: undefined, to: undefined })
    setFromValue('')
    setToValue('')
  }

  const [selectedRange, setSelectedRange] = useState()
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')

  const handleFromChange = (e) => {
    setFromValue(e.target.value)
    const date = parse(e.target.value, 'y-MM-dd', new Date())
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined })
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date })
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to })
    }
  }

  const handleToChange = (e) => {
    setToValue(e.target.value)
    const date = parse(e.target.value, 'y-MM-dd', new Date())

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined })
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from })
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date })
    }
  }
  const handleRangeSelect = (range) => {
    setSelectedRange(range)
    if (range?.from) {
      setFromValue(format(range.from, 'y-MM-dd'))
    } else {
      setFromValue('')
    }
    if (range?.to) {
      setToValue(format(range.to, 'y-MM-dd'))
    } else {
      setToValue('')
    }
  }
  return (
    <>
      <Header />

      <div className="inner"></div>
      <button onClick={handleNavigateToPayMentPage}>예악하기</button>

      <div className="inner">
        <div className="title">
          <h1 className="name">수영장이 있는 대나무 AC 통나무집 , 호수 근처의 바니하우 전망</h1>
          <div className="name-desc">
            <span>Cavinti, Calabarzon, 필리핀</span>
            <div className="buttons">
              <div className="button">
                <span>공유하기</span>
              </div>
              <span>
                <div className="button">저장</div>
              </span>
            </div>
          </div>
        </div>
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
        <div className="main-description">
          <main className="description">
            <div className="description-item room-title">
              <h2>Uncle Rod Private 님이 호스팅하는 농장 체험 숙소</h2>
              <p>최대인원 4명 침대 1개 욕실 1개</p>
            </div>
            <div className="description-item tags">
              <div className="tag"></div>
              <div className="tag"></div>
            </div>
            <div className="description-item room-policy"></div>
            <div className="description-item room-detail-text"></div>
            <div className="description-item"></div>
            <div className="description-item"></div>
            <div className="description-item">
              <div className="calendar-container">
                <DayPicker
                  locale={ko} //한국 날짜 기준
                  mode="range" //날짜 범위선택형
                  numberOfMonths={2} //달력 두개 렌더
                  pagedNavigation
                  //showOutsideDays //fixedWeeks 에 필요
                  //fixedWeeks //달력 크기 고정
                  today={today} //오늘 날짜
                  fromMonth={today} // 렌더 시작 가능한 달(이번 달)
                  toMonth={maximumDate} //렌더 가능한 마지막 달
                  min={2} //최소 예약 기간(일)
                  max={31} //최대 예약 기간(일)
                  selected={selectedRange}
                  onSelect={handleRangeSelect}
                  disabled={disabledDays} //선택 불가능한 날짜
                />
                <input placeholder="From Date" value={fromValue} onChange={handleFromChange} />
                <input placeholder="To Date" value={toValue} onChange={handleToChange} />
              </div>
              <button onClick={handleResetCalendar}>날짜 지우기</button>
            </div>
          </main>
          <aside className="reservation">
            <div className="reservation-card">
              <div className="reservation-card-top">
                <div className="price-per-day"></div>
              </div>
              <div className="reservation-card-middle"></div>
              <div className="reservation-card-btm"></div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default RoomDetailPage
