import React, { useEffect, useState } from 'react'
import Banner from './banner/banner'
import Navbar from './navbar/navbar'
import About from './about/about'
import Kategori from './kategori/kategori'
import Footer from './footer/footer'
import Destinasi from './destinasi/destinasi'
import Rekomendasi from './rekomendasi/rekomendasi'
import axios from 'axios'

const Appwisata = ({onAddFavorite, onDetail}) => {

  const [dataUser, setDataUser] = useState([])
  const [profile, setProfile] = useState(
    localStorage.getItem("profilePic") ? true : false
    )
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
    <div>
      <Navbar dataUser={dataUser}/>
      <Banner/>
      {
        login && (
          <Kategori/>
          )
        }
        {
          login && (
            <Destinasi onAddFavorite={onAddFavorite} onDetail={onDetail} dataUser={dataUser}/>
          )
        }
        {
          login && (
            <Rekomendasi/>
          )
        }
      <About/>
      <Footer/>
    </div>
  )
}

export default Appwisata