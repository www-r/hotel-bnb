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
  reauthenticateWithCredential,
  // getASecureRandomPassword,
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

export async function AddUserData(uid, name, phoneNumber) {
  await set(ref(db, 'users/' + uid), {
    name: name,
    phoneNumber: phoneNumber,
    profileImage: '',
    reservations: {},
    wishList: {},
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
export const getMyPersonalInfo = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid
    // ...
  } else {
    // User is signed out
    // ...
  }
})

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

//비밀번호 재설정
// export const changePasswords = updatePassword(user, newPassword)
//   .then(() => {
    // Update successful.
  // })
  // .catch((error) => {
    // An error ocurred
    // ...
  // })
