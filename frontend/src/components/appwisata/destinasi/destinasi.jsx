import React, { useState, useEffect } from 'react'
import { Button, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container } from '@material-ui/core'

const Destinasi = ({onAddFavorite, onDetail, dataUser}) => {

  // const [ratingValue, setRatingValue] = useState();
  const [favorite, setFavorite] = useState(false);
  const [data, setData] = useState([])

    const getData = async () => {
        const respon = await axios.get(`https://rekomend.herokuapp.com/admin/getDataWisata`)
        setData(respon.data.data);
    }

      useEffect(() => {
        getData();
      }, [])

  return (
    <>
    <Container>
    <div className='mb-20'>
        <h1 className='text-4xl font-semibold py-8 md:px-0'>Explore Destinasi</h1>
        <div className='md:px-0 grid sm:grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4 px-8 scrollbar-hide'>
        {data.map((datas)=>(
        <div className='relative h-[340px] w-full'>
                <img src={`https://rekomend.herokuapp.com/admin/getSingleImage/${datas.gambar}`} alt='wisata' className=' w-full h-[80%] rounded-md scale-100 hover:scale-[1.05] hover:ease-in-out hover:duration-700 duration-700'/>
                <div className='cursor-pointer opacity-80 absolute top-4 right-4 bg-slate-50 rounded-md px-3 py-2'>
                  {
                    favorite? <span className='text-xl text-red-600'><ion-icon onClick={()=> setFavorite(!favorite)} name="heart"/></span> : <span className='text-xl hover:text-red-600' onClick={() => onAddFavorite(datas._id)}><ion-icon onClick={()=> setFavorite(!favorite)} name="heart"/></span>
                  }
                </div>
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
                    <h2 className='text-2xl'>{datas.wisata}</h2>
                    {/* <p className='text-sm text-gray-500'>Anim veniam sit nulla reprehenderit veniam officia dolore ut velit occaecat velit voluptate ad est.</p> */}
                    <span className='flex items-center'>
                      <Rating
                        readOnly
                        name="Rating Label"
                        value={datas.totalRating}
                        precision={0.5}
                        // onChange={(event, newValue) => {
                        //   setRatingValue(newValue);
                        // }}
                      />
                      <p className='ml-2 text-xl font-semibold'>{datas.totalRating}</p>
                    </span>
                    <p className='text-gray-500 mb-3'>(42 Review)</p>
                    <Button fullWidth onClick={() => onDetail(datas._id, dataUser)} component={Link} to="/detail" variant='contained'>Detail</Button>
                </div>
            </div>
        ))}
        </div>
    </div>
    </Container>
    </>
  )
}

export default Destinasi