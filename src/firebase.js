// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, get, onValue, ref, set } from 'firebase/database'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5vpfgD2AVS2m-mV2nGPg_cLEY_Zl_DsE',
  authDomain: 'hotel-bnb-d9ca0.firebaseapp.com',
  projectId: 'hotel-bnb-d9ca0',
  storageBucket: 'hotel-bnb-d9ca0.appspot.com',
  messagingSenderId: '213469209745',
  appId: '1:213469209745:web:4e5c8c420bf76ff5064b30',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)

// 데이터 읽기

const starCountRef = ref(db, 'rooms/')
export const getData = onValue(ref(db, 'rooms/'), (snapshot) => {
  const data = snapshot.val()
  console.log('getData', data)
  return data
})

// 데이터 쓰기
export function writeUserData() {
  const postID = onValue(starCountRef, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
  })
  console.log(postID)
  // set(ref(db, 'rooms/' + postID), {
  //   ID: 'ㅋㅋ',
  // })
}

const auth = getAuth()
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

//Google 로그인
const provider = new GoogleAuthProvider()
export const loginGoogle = () => {
  return signInWithPopup(auth, provider)
}
