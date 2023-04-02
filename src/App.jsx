import React from 'react'
import Router from '@/routes/Router'
import RoomsProvider from './contexts/RoomsProvider'
import UserProvider from './contexts/UserProvider'
import LoginProvider from './contexts/LoginProvider'

function App() {
  return (
    <LoginProvider>
      <UserProvider>
        <RoomsProvider>
          <Router />
        </RoomsProvider>
      </UserProvider>
    </LoginProvider>
  )
}

export default App
