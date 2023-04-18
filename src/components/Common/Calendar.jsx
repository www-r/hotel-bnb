import { addYears } from 'date-fns'
import { ko } from 'date-fns/locale'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'

const Calendar = ({ setCheckIn, setCheckOut }) => {
  const today = new Date() //오늘 날짜
  const maximumDate = addYears(today, 2) //최대 렌더 날짜
  const [selectedRange, setSelectedRange] = useState()

  const handleRangeSelect = (range) => {
    setSelectedRange(range)
    if (range?.from) {
      setCheckIn(range.from)
    } else {
      setCheckIn('')
    }
    if (range?.to) {
      setCheckOut(range.to)
    } else {
      setCheckOut('')
    }
  }

  return (
    <>
      <DayPicker
        style={{ display: 'flex', justifyContent: 'center' }}
        locale={ko} //한국 날짜 기준
        mode="range" //날짜 범위선택형
        numberOfMonths={2} //달력 두개 렌더
        //showOutsideDays //fixedWeeks 에 필요
        //fixedWeeks //달력 크기 고정
        today={today} //오늘 날짜
        fromDate={today} // 렌더 시작 가능한 달(이번 달)
        toMonth={maximumDate} //렌더 가능한 마지막 달
        min={2} //최소 예약 기간(일)
        max={31} //최대 예약 기간(일)
        selected={selectedRange}
        onSelect={handleRangeSelect}
        // disabled={disabledDays} //선택 불가능한 날짜
      />
    </>
  )
}

export default Calendar
