import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating'
import penyusuk from '../../../assset/pantai-penyusuk.png'
import padi from '../../../assset/pasir_padi.png'
import wisma from '../../../assset/wisma-ranggam.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { concat } from 'mathjs'
import { Typography, Button, Container } from '@material-ui/core'

const Rekomendasi = () => {

  const [ratingValue, setRatingValue] = useState(0);
  const [idRek, setIdRek] = useState([])
  const [idRekomendasi, setIdRekomendasi] = useState([])
  const [wisataRekomendasi, setWisataRekomendasi] = useState([])



  const getId = async () => {
    const respon = await axios.get(`http://localhost:8080/`);
    setIdRek(respon.data);
  }

  useEffect(() => {
    getId()
  }, [])

  // const rekom = async () => {
  //   idRek.map((data)=>{
  //       // console.log(data.attractionId)
  //       axios.get(`http://localhost:5000/getWisataId/${data.attractionId}`)
  //         .then(function (res) {
  //             const ad = res.data.data
  //             const arrayHarga = [].concat(...ad.map((totalHarga) => totalHarga));
  //             console.log(arrayHarga)
  //             idRekomendasi.push(arrayHarga);
  //       })
  //   })
  // }

  // const rekomen = async () => {
  //   let hasil = 0;
  //   const arrayBaru = [].concat(...idRekomendasi.map((totalHarga) => totalHarga.map((a) => a)));
  //   wisataRekomendasi.push(arrayBaru)
  //   console.log(wisataRekomendasi)
  // }


  // useEffect(() => {
  //   if(idRek != ""){
  //     rekom();
  //   }
  //   }, )

  //   useEffect(() => {
  //     // if(idRekomendasi != ""){
  //       rekomen();
  //     // }
  //     }, )

  return (
    <Container>
    <div className='pb-12 mb-20'>
        <Typography variant='h4'>Destinasi Rekomendasi</Typography>
        <div className='md:px-20 grid bg-gray-100 dark:bg-gray-900 sm:grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4 px-8'>
        {wisataRekomendasi.map((datas)=>(
        <div className='relative h-[360px]'>
                <img src={penyusuk} alt='wisata' className=' w-full h-[80%] rounded-md scale-100 hover:scale-[1.05] hover:ease-in-out hover:duration-700 duration-700'/>
                <div className='cursor-pointer opacity-80 absolute top-4 right-4 bg-slate-50 rounded-md px-3 py-2'>
                  <span className='text-xl'>
                    <ion-icon name="heart"/>
                  </span>
                </div>
                <div className='bg-white dark:bg-gray-800 dark:text-gray-200 absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-2xl flex flex-col items-center'>
                    <h2 className='text-2xl'>{datas.wisata}</h2>
                    {/* <p className='text-sm text-gray-500'>Anim veniam sit nulla reprehenderit veniam officia dolore ut velit occaecat velit voluptate ad est.</p> */}
                    <span className='flex items-center'>
                      <Rating
                        name="Rating Label"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                      />
                      <p className='ml-2 text-xl font-semibold'>4.6</p>
                    </span>
                    <p className='text-gray-500'>(16 review)</p>
                    <Button component={Link} to="/detail" variant='contained' className='bg-blue-500 rounded-md w-full py-2 mt-2'>Detail</Button>
                </div>
            </div>
        ))}
        </div>
    </div>
    </Container>
  )
}

export default Rekomendasi