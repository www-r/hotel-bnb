// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, get, onValue, ref, set, push, update } from 'firebase/database'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  updatePassword,
  // reauthenticateWithCredential,
  // promptForCredentials,
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import axios from 'axios'
import { axiosFirebase } from '@/apis/axios'
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
export const getUsersData = onValue(ref(db, 'users/'), (snapshot) => {
  const data = snapshot.val()
  console.log('getUsersData', data)
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
    // reservations: Array(''),
    // wishLists: Array({}),
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
      alert('로그아웃 완료')
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

const auth = getAuth()
const user = auth.currentUser
// const newPassword = getASecureRandomPassword()

// 로그인한 사용자의 정보 가져오기
export const getPersonalInfo = async () => {
  let res = await axios({
    method: 'POST',
    url: 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyC5vpfgD2AVS2m-mV2nGPg_cLEY_Zl_DsE',
    data: {
      idToken:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaG90ZWwtYm5iLWQ5Y2EwIiwiYXVkIjoiaG90ZWwtYm5iLWQ5Y2EwIiwiYXV0aF90aW1lIjoxNjgwMzQ4MTUzLCJ1c2VyX2lkIjoiaXN3eVBaNnlPWmZMeU8xd2l3Y0VWdlZaeTY3MyIsInN1YiI6Imlzd3lQWjZ5T1pmTHlPMXdpd2NFVnZWWnk2NzMiLCJpYXQiOjE2ODAzNDgxNTMsImV4cCI6MTY4MDM1MTc1MywiZW1haWwiOiJpbm1laW5AbmF2ZXIuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImlubWVpbkBuYXZlci5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JAFrltJbAx_ypLpBmU6sapbwO5oXIWAIGWIYx3ez2Xzx5D79LgDTxM4ljaSLjVxadTLfDv3yCT1ylP3q0zRNreIJ8QrYt0Mnq-ciYu0mhGrGDAOny7zSj-FYUGvtu-tJMOWAge16HAioNHSjdsVSHrpPW75qI2VP0nlu1XwKlCM7Vr9_TT8KMAi8_3Y_3RZObYYKk5GwAgwyxSHIlpk4TNtMMCA29bxngxITUsWIhIrDmEscE1-_k_Qu9bcWDQjbkhB6rZ0KL2z3x70DY2PWu0hl0Uo-CBWXDghXgdKC_DHpvlxoIhq8obAW3z33gQiHPfVYOQoztF-pBh_5nKLSnw',
    },
  })
  console.log(res)
}
//사용자 재인증
// TODO(you): prompt the user to re-provide their sign-in credentials
// const credential = promptForCredentials()

// export const reauthenticateUser = reauthenticateWithCredential(user, credential)
//   .then(() => {
//     // User re-authenticated.
//   })
//   .catch((error) => {
//     // An error ocurred
//     // ...
//   })

// //비밀번호 재설정
let newPassword
export const changePasswords = updatePassword(user, newPassword)
  .then(() => {
    // Update successful.
  })
  .catch((error) => {
    // An error ocurred
    // ...
  })

// 계정 삭제
export const deleteMyAccount = async () => {
  let res = await axios({
    method: 'POST',
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
    url: 'delete?key=[API_KEY]',
    data: {
      idToken:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaG90ZWwtYm5iLWQ5Y2EwIiwiYXVkIjoiaG90ZWwtYm5iLWQ5Y2EwIiwiYXV0aF90aW1lIjoxNjgwMzQ4MTUzLCJ1c2VyX2lkIjoiaXN3eVBaNnlPWmZMeU8xd2l3Y0VWdlZaeTY3MyIsInN1YiI6Imlzd3lQWjZ5T1pmTHlPMXdpd2NFVnZWWnk2NzMiLCJpYXQiOjE2ODAzNDgxNTMsImV4cCI6MTY4MDM1MTc1MywiZW1haWwiOiJpbm1laW5AbmF2ZXIuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImlubWVpbkBuYXZlci5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JAFrltJbAx_ypLpBmU6sapbwO5oXIWAIGWIYx3ez2Xzx5D79LgDTxM4ljaSLjVxadTLfDv3yCT1ylP3q0zRNreIJ8QrYt0Mnq-ciYu0mhGrGDAOny7zSj-FYUGvtu-tJMOWAge16HAioNHSjdsVSHrpPW75qI2VP0nlu1XwKlCM7Vr9_TT8KMAi8_3Y_3RZObYYKk5GwAgwyxSHIlpk4TNtMMCA29bxngxITUsWIhIrDmEscE1-_k_Qu9bcWDQjbkhB6rZ0KL2z3x70DY2PWu0hl0Uo-CBWXDghXgdKC_DHpvlxoIhq8obAW3z33gQiHPfVYOQoztF-pBh_5nKLSnw',
    },
  })
  console.log(res)
}

//  "https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN>"
