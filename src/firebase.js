// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, onValue, ref, set, push, child } from 'firebase/database'
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  deleteUser,
} from 'firebase/auth'
import useToastMessage from './hooks/useToastMessage'

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
  // console.log('getData', data)
  return data
})
export const getUsersData = onValue(ref(db, 'users/'), (snapshot) => {
  const data = snapshot.val()
  // console.log('getUsersData', data)
  return data
})

// 데이터 쓰기
export function writeUserData() {
  const postID = onValue(starCountRef, (snapshot) => {
    const data = snapshot.val()
    // console.log(data)
  })
}

// 방 정보 추가
export async function AddRoomData(datas, resetFunc, initialState) {
  try {
    onValue(
      ref(db, 'rooms/'),
      async (snapshot) => {
        const postNumber = snapshot.val().length
        const amenities = datas.AMENITIES

        await set(ref(db, 'rooms/' + postNumber), {
          id: String(datas.ID),
          title: String(datas.TITLE),
          price: Number(datas.PRICE),
          description: String(datas.DESCSRIPTION),
          location: String(datas.LOCATION),
          rating: Number(datas.RATING),
          geoLocation: {
            lat: Number(datas.GEOLOCATION_LAT),
            lng: Number(datas.GEOLOCATION_LNG),
          },
          reservation: {
            start: Number(datas.RESERVATION_START),
            end: Number(datas.RESERVATION_END),
          },
          amenities: {
            ...String(amenities),
          },
          thumbnail: String(datas.THUMBNAIL),
        })
      },
      { onlyOnce: true },
    )
  } catch (err) {
    alert(err)
  }
}

export async function AddUserData(uid, email, name, phoneNumber, profileImageURL = '') {
  await set(ref(db, 'users/' + uid), {
    email: String(email),
    name: String(name),
    phoneNumber: String(phoneNumber),
    profileImageURL: profileImageURL,
    reservations: [],
    wishList: [],
  })
}

export async function AddWishListData(uid, room) {
  // const key = push(ref(db, 'users/' + uid + '/wishList')).key
  await push(child(ref(db), 'users/' + uid + '/wishList'), {
    wishList: room,
  })
}

// 이메일 로그인
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(getAuth(), email, password)
}

// Google 로그인
const provider = new GoogleAuthProvider()
export const loginGoogle = () => {
  return signInWithPopup(getAuth(), provider)
}
export const logout = () => {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      console.log('true')
      useToastMessage('로그아웃 완료')
    })
    .catch((err) => {
      console.log(err)
    })
}
// 회원가입
export const CreateUser = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(getAuth(), email, password)
    return user
  } catch ({ code, message }) {
    alert(errorMessage[code])
  }
}

//비밀번호 재설정
export const changePassword = (user, newPassword) => {
  try {
    updatePassword(user, newPassword)
  } catch (error) {
    console.log(error)
  }
}
// 계정 삭제
export const deleteAccount = async () => {
  const user = getAuth().currentUser
  try {
    await deleteUser(user)
    alert('삭제 성공!')
  } catch (error) {
    console.log(error)
  }
}
