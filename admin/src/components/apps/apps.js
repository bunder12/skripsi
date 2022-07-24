import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './navbar/navbar'
import Postwisata from './postwisata/postwisata'
import Dashboard from './dashboard/dashboard'

const Apps = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/post-wisata' element={<Postwisata/>} />
        </Routes>
    </Router>
  )
}

export default Apps