import React, { useState, useEffect } from 'react'
import { Container, InputBase } from '@material-ui/core';
import { Button, Rating } from '@mui/material'
import { ArrowBack, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Map from './map/map';
import useStyles from './styled'
import Destinasi from '../destinasi/destinasi';
import axios from 'axios';

const All = ({onDetail, dataUser}) => {

    const classes = useStyles();

    const [data, setData] = useState([])
    const [favorite, setFavorite] = useState(false);

    const getData = async () => {
        const respon = await axios.get(`http://localhost:5000/admin/getDataWisata`)
        setData(respon.data.data);
    }

      useEffect(() => {
        getData();
      }, [])

  return (
    <div>
        <Container>
            <Link to="/">
            <ArrowBack style={{color: 'black', fontSize: '40px', margin: '20px 0'}}/>
            </Link>
            <div>
                <Map data={data}/>
            </div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <Search/>
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className='dark:bg-gray-900  mb-20'>
            <h1 className='text-4xl font-semibold py-8 md:px-0 dark:text-gray-100'>Explore Destinasi</h1>
            <div className='md:px-0 grid dark:bg-gray-900 sm:grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4 px-8 scrollbar-hide'>
            {data.map((datas, index)=>(
            <div key={index} className='relative h-[340px] w-full'>
                    <img src={`http://localhost:5000/admin/getSingleImage/${datas.gambar}`} alt='wisata' className=' w-full h-[80%] rounded-md scale-100 hover:scale-[1.05] hover:ease-in-out hover:duration-700 duration-700'/>
                    <div className='cursor-pointer opacity-80 absolute top-4 right-4 bg-slate-50 rounded-md px-3 py-2'>
                    {
                        favorite? <span className='text-xl text-red-600'><ion-icon name="heart"/></span> : <span className='text-xl hover:text-red-600' ><ion-icon name="heart"/></span>
                    }
                    </div>
                    <div className='bg-white dark:bg-gray-800 dark:text-gray-200 absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
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
                        <Button fullWidth variant='contained' onClick={() => onDetail(datas._id, dataUser)}  component={Link} to="/detail" color='primary'>Detail</Button>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </Container>
    </div>
  )
}

export default All