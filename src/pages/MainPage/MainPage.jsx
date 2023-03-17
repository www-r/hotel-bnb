import React from 'react'
import { db } from '@/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import Header from '../../components/Common/Header/Header'

const MainPage = () => {
  const setFunc = async () => {
    const docRef = await addDoc(collection(db, 'adasd'), {
      FirstName: 'wwww',
      LastName: 'lawwwst',
      age: 500,
    })
  }

  const getFunc = async () => {
    const querySnapshot = await getDocs(collection(db, 'rooms'))
    querySnapshot.forEach((data) => console.log(data.data()))
  }
  return <Header />
}

export default MainPage
