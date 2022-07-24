import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import Register from './components/register/register';
import Forgotpassword from './components/forgotpassword/forgotpassword';
import Resetpassword from './components/forgotpassword/resetpassword/resetpassword';
import Appwisata from './components/appwisata/appwisata';
import Profile from './components/appwisata/profile/profile';
import Favorite from './components/appwisata/favorite/favorite';
import Pantai from './components/appwisata/kategori/pantai/pantai';
import Danau from './components/appwisata/kategori/danau/danau';
import Sejarah from './components/appwisata/kategori/sejarah/sejarah';
import Airterjun from './components/appwisata/kategori/airterjun/airterjun';
import Details from './components/appwisata/destinasi/detail/details';
import axios from 'axios';
import All from './components/appwisata/alldestinasi/all';

const App = () => {

  const [favorite, setFavorite] = useState([])
  const [idWisata, setIdWisata] = useState([])
  const [data, setData] = useState([])
  const [dataUser, setDataUser] = useState([])

  const handleAddFavorite = async (wisataId) => {
    const favorite = await axios.get(`${process.env.GET_WISATA_BYID}${wisataId}`)
    setFavorite(favorite.data.data)
  }

  const handleDetail = async (wisataId, dataUser) => {
    setIdWisata(wisataId)
    setData(dataUser)
  }

  const [login, setLogin] = useState(
    localStorage.getItem("token")? true : false
  )

  const autorization = () => {
    const token = localStorage.getItem("token");
    axios.get('http://localhost:5000/getUser', {
    headers: {
      'Authoriz': token
    }
  })
.then((res) => {
  setDataUser(res.data.data)
})
.catch((error) => {
  console.error(error)
})
  }

  useEffect(() => {
    if(login === true){
      autorization()
    }
  }, [])

  return (
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Appwisata onAddFavorite={handleAddFavorite} onDetail={handleDetail}/>} />
        <Route exact path='/all-destinasi' element={<All onDetail={handleDetail} dataUser={dataUser}/>} />
        <Route exact path='/kategori-pantai' element={<Pantai/>} />
        <Route exact path='/kategori-danau' element={<Danau/>} />
        <Route exact path='/kategori-sejarah' element={<Sejarah onDetail={handleDetail} dataUser={dataUser}/>} />
        <Route exact path='/kategori-airterjun' element={<Airterjun/>} />
        <Route exact path='/detail' element={<Details idWisata={idWisata} dataUser={data}/>} />
        <Route exact path='/profile' element={<Profile dataUser={dataUser}/>} />
        <Route exact path='/favorite' element={<Favorite favorite={favorite}/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/forgotpassword' element={<Forgotpassword/>} />
        <Route exact path='/resetpassword/:token' element={<Resetpassword/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App