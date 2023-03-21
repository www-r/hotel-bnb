import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '@/styles/Global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
)
