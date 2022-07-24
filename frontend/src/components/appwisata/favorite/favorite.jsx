import React from 'react'
import { Typography, Grid, Container, CardContent, Card, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating'

const Favorite = ({favorite}) => {

  const EmptyCart = () => (
    <Typography variant="subtitle1">Kamu belum menambahkan wisata favoritemu, 
        <Link to="/"> mulai tambahkan</Link>!</Typography>
  );

  const FilledCart = () => (
    <>
       <Grid container spacing={3}>
        {favorite.map((item, index) => (
          <Grid item xs={12} sm={6} key={`${item.id}-${index}`}>
                <div className='relative h-[340px] w-full'>
                <img src={`http://localhost:5000/admin/getSingleImage/${item.gambar}`} alt='wisata' className=' w-full h-[80%] rounded-md scale-100 hover:scale-[1.05] hover:ease-in-out hover:duration-700 duration-700'/>
                <div className='bg-white absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-2xl flex flex-col items-center'>
                    <h2 className='text-2xl'>{item.wisata}</h2>
                    {/* <p className='text-sm text-gray-500'>Anim veniam sit nulla reprehenderit veniam officia dolore ut velit occaecat velit voluptate ad est.</p> */}
                    <span className='flex items-center'>
                      <Rating
                        readOnly
                        name="Rating Label"
                        value={item.totalRating}
                        precision={0.5}
                        // onChange={(event, newValue) => {
                        //   setRatingValue(newValue);
                        // }}
                      />
                      <p className='ml-2 text-xl font-semibold'>{item.totalRating}</p>
                    </span>
                    <p className='text-gray-500'>(42 Review)</p>
                    <Button fullWidth component={Link} to="/detail" variant='contained' color='primary'>Detail</Button>
                </div>
            </div>
            </Grid>
        ))}
       </Grid>
    </>
)

  return (
    <Container>
        <Typography variant="h3" gutterBottom>Wisata Favoritmu</Typography>
        {!favorite.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Favorite