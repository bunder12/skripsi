import React, { useEffect, useState, useRef } from 'react'
import Banner from './banner/banner'
import Navbar from './navbar/navbar'
import About from './about/about'
import Kategori from './kategori/kategori'
import Footer from './footer/footer'
import Destinasi from './destinasi/destinasi'
import Rekomendasi from './rekomendasi/rekomendasi'
import axios from 'axios'

const Appwisata = ({onAddFavorite, onDetail}) => {

  const refAbout = useRef(null)
  const refHome = useRef(null)
  const refContact = useRef(null)
  const refKategori = useRef(null)
  const refRekomendasi = useRef(null)

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
      <Navbar refAbout={refAbout} refHome={refHome} refKategori={refKategori} refRekomendasi={refRekomendasi} refContact={refContact} dataUser={dataUser}/>
      <Banner refHome={refHome}/>
      {
        login && (
          <Kategori refKategori={refKategori}/>
          )
        }
        {
          login && (
            <Destinasi onAddFavorite={onAddFavorite} onDetail={onDetail} dataUser={dataUser}/>
          )
        }
        {
          login && (
            <Rekomendasi refRekomendasi={refRekomendasi}/>
          )
        }
      <About refAbout={refAbout}/>
      <Footer refContact={refContact}/>
    </div>
  )
}

export default Appwisata