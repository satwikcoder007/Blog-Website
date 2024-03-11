import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthProvider } from './context/Authcontex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
 <AuthProvider>
 <App />
 </AuthProvider>
 </BrowserRouter>
)
