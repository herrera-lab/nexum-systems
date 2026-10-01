import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import IdiomaProvider from './i18n/IdiomaProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <IdiomaProvider>
        <App />
      </IdiomaProvider>
    </BrowserRouter>
  </StrictMode>,
)
