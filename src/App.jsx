import React from 'react'

import Router from '@/routes/Router'
import RoomsProvider from './contexts/RoomsProvider'

function App() {
  return (
    <RoomsProvider>
      <Router />
    </RoomsProvider>
  )
}

export default App
