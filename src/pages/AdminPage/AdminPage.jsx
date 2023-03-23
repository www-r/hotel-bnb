import React from 'react'
import { writeUserData } from '../../firebase'
import * as S from './AdminPage.style'

const AdminPage = () => {
  const uploadData = () => {
    console.log('등록 완료')
    writeUserData()
  }

  return (
    <S.Container>
      ID
      <input />
      Title
      <input />
      Price
      <input />
      Location
      <input />
      Description
      <input />
      Rating
      <input />
      Reservation Start
      <input />
      Reservation End
      <input />
      Amenities
      <input />
      Geo Location
      <input />
      <button
        onClick={() => {
          uploadData()
        }}
      >
        등록
      </button>
    </S.Container>
  )
}

export default AdminPage
