import React from 'react'
import Router from '@/routes/Router'
import RoomsProvider from './contexts/RoomsProvider'
import UserProvider from './contexts/UserProvider'
import LoginProvider from './contexts/LoginProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginProvider>
        <UserProvider>
          <RoomsProvider>
            <Router />
            <ReactQueryDevtools />
          </RoomsProvider>
        </UserProvider>
      </LoginProvider>
    </QueryClientProvider>
  )
}

export default App
