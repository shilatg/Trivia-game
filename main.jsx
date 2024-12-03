import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PopupProvider } from './components/PopupProvider.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopupProvider>
      
    <App />
    </PopupProvider>
  </React.StrictMode>,
)
