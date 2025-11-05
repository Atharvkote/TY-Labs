import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Toaster} from 'sonner'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
        toastOptions={{
          style: {
            background: '#7605d8ff',
            color: '#FFFFFF',
            borderRadius: '0.5rem',
            fontWeight: 500,
            fontSize: '1rem',
          },
          iconTheme: {
            primary: '#FFFFFF',
            secondary: '#9A3412',
          },
        }}
      />
    <App />
  </StrictMode>,
)
