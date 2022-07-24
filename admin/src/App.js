import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/login'
import Dashboard from './components/apps/dashboard/dashboard'
import Postwisata from './components/apps/postwisata/postwisata'
import Navbar from './components/apps/navbar/navbar'
import Datawisata from './components/apps/datawisata/datawisata'

const App = () => {

  const login = true;

  return (
    <Router>
      {
        login? <Navbar/> : null
      } 
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route exact path='/post-wisata' element={<Postwisata/>} />
        <Route exact path='/data-wisata' element={<Datawisata/>} />
      </Routes>
    </Router>
  )
}

export default App