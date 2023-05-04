import React from 'react'
import Router from '@/routes/Router'
import RoomsProvider from './contexts/RoomsProvider'
import UserProvider from './contexts/UserProvider'
import LoginProvider from './contexts/LoginProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginProvider>
        <UserProvider>
          <RoomsProvider>
            <Router />
            <ReactQueryDevtools />
            <ToastContainer />
          </RoomsProvider>
        </UserProvider>
      </LoginProvider>
    </QueryClientProvider>
  )
}

export default App
