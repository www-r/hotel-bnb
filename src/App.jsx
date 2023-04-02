import React from 'react'
import Router from '@/routes/Router'
import RoomsProvider from './contexts/RoomsProvider'
import UsersProvider from './contexts/UsersProvider'

function App() {
  return (
    <UsersProvider>
      <RoomsProvider>
        <Router />
      </RoomsProvider>
    </UsersProvider>
  )
}

export default App
