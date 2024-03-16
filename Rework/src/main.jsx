import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './App'
import { Navbar } from './components/navbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>,
)
