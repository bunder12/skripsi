import React, { useState, useEffect } from 'react'
import { Container, InputBase, Typography } from '@material-ui/core';
import { Button, Rating, Pagination, Stack, Skeleton } from '@mui/material'
import { ArrowBack, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Map from './map/map';
import useStyles from './styled'
import usePagination from './pagination';
import axios from 'axios';

const All = ({onDetail, dataUser}) => {

    const classes = useStyles();

    const [data, setData] = useState([])
    const [favorite, setFavorite] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const PER_PAGE = 8
    const count = Math.ceil(data.length / PER_PAGE);
    const _data = usePagination(data, PER_PAGE);

    const getData = async () => {
        const respon = await axios.get(`https://rekomend.herokuapp.com/admin/getDataWisata`)
        setData(respon.data.data);
        setLoading(false)
    }

    const handlePagination = (e, p) => {
        setPage(p)
        _data.jump(p)
    }

      useEffect(() => {
        getData();
      }, [page])

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
            <div className='mb-20'>
            <Typography style={{fontWeight: 'bold', display: 'flex', flexDirection: 'column', marginTop: '3rem'}} variant='h3'>Explore Destinasi</Typography>
            <p className='mb-8 text-xl text-slate-500'>Semua Destinasi bisa anda cari pada<br/>  halaman ini, tunggu apalagi explore sekarang</p>
            <div className='grid sm:grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4'>
            {
                loading && 
                <>
                <div className='relative h-[340px] w-full'>
                <Skeleton sx={{ height: '80%', borderRadius: '10px' }} animation="wave" variant="rectangular" />
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6 }}/>
                </div>
                </div>
                <div className='relative h-[340px] w-full'>
                <Skeleton sx={{ height: '80%', borderRadius: '10px' }} animation="wave" variant="rectangular" />
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6 }}/>
                </div>
                </div>
                <div className='relative h-[340px] w-full'>
                <Skeleton sx={{ height: '80%', borderRadius: '10px' }} animation="wave" variant="rectangular" />
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6 }}/>
                </div>
                </div>
                <div className='relative h-[340px] w-full'>
                <Skeleton sx={{ height: '80%', borderRadius: '10px' }} animation="wave" variant="rectangular" />
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6 }}/>
                </div>
                </div>
                <div className='relative h-[340px] w-full'>
                <Skeleton sx={{ height: '80%', borderRadius: '10px' }} animation="wave" variant="rectangular" />
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6 }}/>
                </div>
                </div>
                <div className='relative h-[340px] w-full'>
                <Skeleton sx={{ height: '80%', borderRadius: '10px' }} animation="wave" variant="rectangular" />
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6 }}/>
                </div>
                </div>
                <div className='relative h-[340px] w-full'>
                <Skeleton sx={{ height: '80%', borderRadius: '10px' }} animation="wave" variant="rectangular" />
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6 }}/>
                </div>
                </div>
                <div className='relative h-[340px] w-full'>
                <Skeleton sx={{ height: '80%', borderRadius: '10px' }} animation="wave" variant="rectangular" />
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-md flex flex-col items-center'>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
                    <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6 }}/>
                </div>
                </div>
                </>
            }
            {_data.currentData().map((datas, index)=>(
            <div key={index} className='relative h-[340px] w-full'>
                    <img src={`https://rekomend.herokuapp.com/admin/getSingleImage/${datas.gambar}`} alt='wisata' className=' w-full h-[80%] rounded-md scale-100 hover:scale-[1.05] hover:ease-in-out hover:duration-700 duration-700'/>
                    <div className='cursor-pointer opacity-80 absolute top-4 right-4 bg-slate-50 rounded-md px-3 py-2'>
                    {
                        favorite? <span className='text-xl text-red-600'><ion-icon name="heart"/></span> : <span className='text-xl hover:text-red-600' ><ion-icon name="heart"/></span>
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
                        <p className='ml-2 text-xl font-semibold'>{Math.round(datas.totalRating)}.0</p>
                        </span>
                        <p className='text-gray-500 mb-3'>(42 Review)</p>
                        <Button fullWidth variant='contained' onClick={() => onDetail(datas._id, dataUser)}  component={Link} to="/detail" color='primary'>Detail</Button>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div className='w-full mb-20'>
            <Stack spacing={8}>
                <Pagination page={page} count={count} onChange={handlePagination}/>
            </Stack>
        </div>
        </Container>
    </div>
  )
}

export default All