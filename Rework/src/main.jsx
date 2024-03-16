import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from './App.jsx'
import './index.css'
import { Home } from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
