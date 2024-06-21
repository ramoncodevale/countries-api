import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from './context/dark-mode-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeProvider>  
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </DarkModeProvider>
  </React.StrictMode>
)
