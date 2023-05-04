import React from 'react'
import Router from '@/routes/Router'
import RoomsProvider from './contexts/RoomsProvider'
import UserProvider from './contexts/UserProvider'
import LoginProvider from './contexts/LoginProvider'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <LoginProvider>
      <UserProvider>
        <RoomsProvider>
          <Router />
          <ToastContainer />
        </RoomsProvider>
      </UserProvider>
    </LoginProvider>
  )
}

export default App
