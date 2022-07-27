import React, { useState, useEffect } from 'react'
import { Button, Typography, Container, Card, CardContent, Rating, Modal, Box, TextField, Divider, Alert, Snackbar } from '@mui/material'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Map from './map/map'
import axios from 'axios'


const Details = ({idWisata, dataUser}) => {
    
    const [ratingValue, setRatingValue] = useState(0);
    const [ratingValues, setRatingValues] = useState(4);
    const [ratingKomentar, setRatingKomentar] = useState({});
    const [open, setOpen] = useState(false);
    const [save, setSave] = useState(false);
    const [messageUlasan, setMessageUlasan] = useState("");
    const [wisata, setWisata] = useState({})
    const [user, setUser] = useState({})

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: 'none',
        outline: 'none',
        boxShadow: 24,
        p: 4,
      };

    const detail = async (idWisata, dataUser) =>{
        const wisata = await axios.get(`http://localhost:5000/getWisataId/${idWisata}`)
        const ratingKomentar = await axios.get(`http://localhost:5000/rating`)
        setRatingKomentar(ratingKomentar.data)
        setWisata(wisata.data.data[0])
        setUser(dataUser._id)
        // ratingKomentars()
    } 

    // const ratingKomentars = async () => {
    //     const ratingKomentar = await axios.get(`http://localhost:5000/getRating/${wisata._id}`)
    //     console.log(ratingKomentar)
    // }

    useEffect(() => {
    detail(idWisata, dataUser)
    }, [])

    const handleSave = () => {
    const komentar = document.querySelector("#komentar").value;
    const data = {
        aid: wisata._id,
        uid: user,
        rating: ratingValue,
        komentar: komentar
    }
    axios.post('http://localhost:5000/addRating', data)
    .then(res => {
        setMessageUlasan(res.data.message)
        handleClose()
        setSave(true)
    }).catch(e => {
        console.log(e)
    })
    axios.put(`http://localhost:5000/totalRating/${wisata._id}`)
    }

    const handleCloses = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSave(false);
      };

  return (
    <div>
        <Container>
        <Link to="/">
        <Button style={{display: 'flex', justifyContent: 'flex-start', padding: 0, marginBottom: '20px', marginTop: '10px'}}>
            <ArrowBack style={{fontSize: '40px', color: 'black'}}/>
        </Button>
        </Link>
            <div className='block md:flex pb-12'>
            <div className='basis-full md:basis-8/12'>
                <div>
                    <Typography variant='h4'>{wisata.wisata}</Typography>

                    <img className='w-full' src={`http://localhost:5000/admin/getSingleImage/${wisata.gambar}`}/>
                    <Typography variant='h6'>Deskripsi</Typography>
                    <Typography variant='subtitle1'>{wisata.deskripsi}</Typography>
                </div>
                <Divider style={{margin: '20px 0'}}/>
                <div className=''>
                    <Typography variant='h4'>Lokasi</Typography>
                    <Map lat={wisata.lat} lang={wisata.lang}/>
                </div>
                <div className='py-12'>
                    <div className='flex justify-between items-center'>
                    <Typography variant='h4'>Ulasan</Typography>
                    <Button onClick={handleOpen} variant='contained'>Kasih Ulasan</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {wisata.wisata}
                        </Typography>
                        <Typography sx={{ mt: 2}}>Bagaimana penilaian Anda?</Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1, mb: 2 }}>
                        <Rating 
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                        />
                        </Typography>
                        <TextField id='komentar'/>
                        <div>
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                        </div>
                        </Box>
                    </Modal>
                    <Snackbar open={save} onClose={handleCloses} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                        <Alert onClose={handleCloses} severity="success" sx={{ width: '100%' }}>
                        {messageUlasan}
                        </Alert>
                    </Snackbar>
                    </div>
                    <div className='flex mb-4'>
                    <Rating
                        readOnly
                        name="Rating Label"
                        value={wisata.totalRating}
                        precision={0.5}
                      />
                    <Typography style={{marginLeft: '10px'}}>{Math.round(wisata.totalRating)}.0 ({ratingKomentar.length} ulasan)</Typography>
                    </div>
                    {
                        ratingKomentar.length && (
                            ratingKomentar.map(ratingKomentars => (
                                <>
                            {
                                ratingKomentars.aid == idWisata && (
                                    <div className='p-4 border-2 rounded-md mb-8'>
                                        <Typography>{ratingKomentars.usersdetail[0].username}</Typography>
                                        <Rating readOnly value={ratingValues}/>
                                        <Typography style={{fontSize: '14px', color: '#B9B9B9'}} variant='subtitle1'>Berkomentar</Typography>
                                        <Typography>"{ratingKomentars.komentar}"</Typography>
                                    </div>
                                )
                            }
                            </>
                            ))
                        )
                    }
                </div>
            </div>
            <div className='basis-full md:basis-4/12 sticky px-0 md:px-8 h-screen top-0'>
                <Card>
                    <CardContent>
                        <Typography>Alamat</Typography>
                        <Typography>Jl. Mayor Sunaryo, Kedung Lumbu, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57133</Typography>
                        <Button href={wisata.urlMap} fullWidth variant='contained'>Telusuri Map</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Details