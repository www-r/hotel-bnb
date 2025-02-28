import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { addYears, addMonths, format, isAfter, isBefore, isValid, parse } from 'date-fns'
import { ko } from 'date-fns/locale'

import * as S from './Calendar.style'

import 'react-day-picker/dist/style.css'

const Calendar = ({ setCheckInDate, setCheckOutDate, roomReservedDays }) => {
  //달력
  const today = new Date() //오늘 날짜
  const maximumDate = addYears(today, 2) //최대 렌더 날짜
  const reservedDates = roomReservedDays?.map(
    (reservedDay) => new Date(reservedDay.replace(/-/g, ',')),
  )
  const disabledDays = [
    // ...reservedDates, //예약된 날짜들
    { from: addMonths(today, 2), to: addYears(today, 2) }, //오늘로부터 2개월 뒤부터는 선택 불가능
  ]
  // console.log('reservedDays:', reservedDates)
  const [selectedRange, setSelectedRange] = useState()

  const handleFromChange = (e) => {
    // console.log('checkIn:', e.target.value)
    setFromValue(e.target.value)
    setCheckInDate(e.target.value)
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
    // console.log('checkOut:', e.target.value)
    setCheckOutDate(e.target.value)
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
      setCheckInDate(format(range.from, 'y-MM-dd'))
    } else {
      setCheckInDate('')
    }
    if (range?.to) {
      setCheckOutDate(format(range.to, 'y-MM-dd'))
    } else {
      setCheckOutDate('')
    }
  }
  const handleResetCalendar = () => {
    setSelectedRange({ from: undefined, to: undefined })
    setCheckInDate('')
    setCheckOutDate('')
  }

  return (
    <div>
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
        disabled={reservedDates ? [...reservedDates, ...disabledDays] : [...disabledDays]} //선택 불가능한 날짜
      />
      {/* <input placeholder="From Date" value={fromValue} onChange={handleFromChange} />
      <input placeholder="To Date" value={toValue} onChange={handleToChange} /> */}

      <S.Button onClick={handleResetCalendar}>
        <span>날짜 지우기</span>
      </S.Button>
    </div>
  )
}

export default Calendar
