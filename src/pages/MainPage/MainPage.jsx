import React from 'react'
import { db } from '@/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

const MainPage = () => {
  const setFunc = async () => {
    const docRef = await addDoc(collection(db, 'adasd'), {
      FirstName: 'wwww',
      LastName: 'lawwwst',
      age: 500,
    })
    console.log(docRef)
  }

  const getFunc = async () => {
    const querySnapshot = await getDocs(collection(db, 'rooms'))
    querySnapshot.forEach((data) => console.log(data.data()))
  }
  return (
    <div>
      <button onClick={setFunc}>set</button>
      <button onClick={getFunc}>get</button>
    </div>
  )
}

export default MainPage
