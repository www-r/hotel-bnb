import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddRoomData } from '../../firebase'
import * as S from './AdminPage.style'

const AdminPage = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    ID: '',
    TITLE: '',
    PRICE: 0,
    LOCATION: '',
    DESCSRIPTION: '',
    RATING: 0,
    RESERVATION_START: 0,
    RESERVATION_END: 0,
    AMENITIES: '',
    GEOLOCATION_LAT: 0,
    GEOLOCATION_LNG: 0,
    THUMBNAIL: '',
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const uploadData = async (values) => {
    values.AMENITIES = values.AMENITIES.replaceAll(' ', '').split(',')
    await AddRoomData(values)
    navigate('/')
  }

  return (
    <S.Container>
      <h2>객실 추가</h2>
      ID
      <input name="ID" value={values.ID} onChange={handleChange} />
      Title
      <input name="TITLE" value={values.TITLE} onChange={handleChange} />
      Price
      <input name="PRICE" value={values.PRICE} onChange={handleChange} />
      Location
      <input name="LOCATION" value={values.LOCATION} onChange={handleChange} />
      Description
      <input name="DESCSRIPTION" value={values.DESCSRIPTION} onChange={handleChange} />
      Rating
      <input name="RATING" value={values.RATING} onChange={handleChange} />
      Reservation Start
      <input name="RESERVATION_START" value={values.RESERVATION_START} onChange={handleChange} />
      Reservation End
      <input name="RESERVATION_END" value={values.RESERVATION_END} onChange={handleChange} />
      Amenities
      {/* <button
        onClick={() => {
          addInput()
        }}
      >
        +
      </button>
      {inputAmenitiesEl.map((el) => {
        return (
          <input
            key={el.id}
            name={`AMENITIES[${el.id}]`}
            value={values.AMENITIES[el.id]}
            onChange={handleChange}
          />
        )
      })} */}
      <input name="AMENITIES" value={values.AMENITIES} onChange={handleChange} />
      Geo Location lat
      <input name="GEOLOCATION_LAT" value={values.GEOLOCATION_LAT} onChange={handleChange} />
      Geo Location lng
      <input name="GEOLOCATION_LNG" value={values.GEOLOCATION_LNG} onChange={handleChange} />
      Thumbnail URL
      <input name="THUMBNAIL" value={values.THUMBNAIL} onChange={handleChange} />
      <button
        onClick={() => {
          uploadData(values)
        }}
      >
        등록
      </button>
    </S.Container>
  )
}

export default AdminPage
