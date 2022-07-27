import React, { useEffect, useState } from 'react'
import { Card, CardContent, TextField, Typography, Button, IconButton, Divider, Grid, MenuItem, Container, Link } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { Delete, PhotoCamera } from '@material-ui/icons'
import ImageUploading from 'react-images-uploading'
import useStyles from './styled'
import axios from 'axios'

const Postwisata = () => {

const [images, setImages] = useState('');
const [imageList, setImageList] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList[0].file);
    setImageList(imageList);
  };

    const [kategori, setKategori] = useState([]);
    const [kategoriId, setKategoriId] = useState();
    const [formData, setFormData] = useState('');
    const classes = useStyles();

    useEffect(() => {
        setFormData(new FormData())
    }, [])

    const handleUpload = (e) => {
        
        const wisata = document.querySelector("#wisata").value;
        const deskripsi = document.querySelector("#deskripsi").value;
        const lat = document.querySelector("#lat").value;
        const lang = document.querySelector("#lang").value;
        const url = document.querySelector("#url").value;

        e.preventDefault();
        formData.set('kategori_id', kategoriId);
        formData.set('wisata', wisata);
        formData.set('deskripsi', deskripsi);
        formData.set('lat', lat);
        formData.set('lang', lang);
        formData.set('urlMap', url);
        formData.append('gambar', images);

        // const photo = document.getElementById("photo").name;

        // const dataUpload  = {
        //     kategori_id: kategoriId,
        //     wisata: wisata,
        //     deskripsi: deskripsi,
        //     lat: lat,
        //     lang: lang,
        //     urlMap: url,
        //     gambar: images,
        // }
        // console.log(dataUpload)
        axios.post('http://localhost:5000/admin/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            document.querySelector("#wisata").value = "";
            document.querySelector("#deskripsi").value = "";
            document.querySelector("#lat").value = "";
            document.querySelector("#lang").value = "";
            document.querySelector("#url").value = "";
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getKategori = async () => {
        const kategoriData = await axios.get('http://localhost:5000/admin/getKategori');
        setKategori(kategoriData.data.data)
    }

    useEffect(() => {
        getKategori();
    }, [])

  return (
    <div className={classes.section}>
      <Container className={classes.container}>
    <Typography className={classes.title} variant='h3'>Upload Wisata</Typography>
    <div style={{display: 'flex', width: '100%'}}>
      <div style={{marginRight: '20px', height: '100%', position: 'sticky', top: '10px'}}>
        <Card>
            <MenuItem style={{textDecoration: 'none'}} component={Link} href="#detail">Detail</MenuItem>
            <MenuItem style={{textDecoration: 'none'}} component={Link} href="#gambar">Gambar</MenuItem>
            <MenuItem style={{textDecoration: 'none'}} component={Link} href="#map">Map</MenuItem>
        </Card>
      </div>
        <div style={{width: '100%'}}>
        <section id='detail'>
        <Grid style={{width: '100%'}}>
        <Card className={classes.card}>
            <CardContent>
            <Typography className={classes.subtitle} variant='h3'>Detail</Typography>
                <Divider/>
            <div className={classes.areaUpload}>
            <Autocomplete
                    style={{margin: '20px 0'}}
                    options={kategori}
                    renderInput={params => (
                    <TextField {...params} label="Kategori" variant="outlined" />
                  )}
                  getOptionLabel={option => option.kategori}
                  onChange={(_event, kategoris) => {
                    setKategoriId(kategoris._id);
                  }}
                />
                <TextField style={{marginBottom: '20px'}} variant='outlined' id='wisata' label='Nama Wisata'/>
                <Card className={classes.cardDeskripsi}>
                <CardContent className={classes.cardContentDeskripsi}>
                <TextField
                    className={classes.deskripsi}
                    id='deskripsi'
                    label="Description"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                      }}
                    />
                {/* <TextareaAutosize className={classes.deskripsi} placeholder='Description' maxRows={4} id='deskripsi'/> */}
                </CardContent>
                </Card>
                </div>
            </CardContent>
        </Card>
        </Grid>
        </section>

        <Grid style={{width: '100%'}}>
        <Card className={classes.card}>
            <CardContent>
            <section id='gambar'>
            <Typography className={classes.subtitle} variant='h3'>Gambar</Typography>
                <div className={classes.areaUpload}>
                <ImageUploading 
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                >
                    {({
                        onImageUpload,
                        onImageUpdate,
                        onImageRemoveAll,
                        dragProps
                        }) => (
                          <div>
                            <div {...dragProps} className={classes.uploadImg}>
                              <div style={{textAlign: 'center'}}>  
                              <Typography style={{marginBottom: '16px'}}>Drag and Drop</Typography>
                              <Typography style={{marginBottom: '16px'}}>Or</Typography>
                              <Button onClick={onImageUpload} 
                              variant="contained" component="span" color='primary' startIcon={<PhotoCamera/>}>
                                  Upload Image
                              </Button>
                              </div>
                            </div>
                            {imageList.map((image, index) => (
                                <div key={index} className={classes.outputImg}>
                                  <Typography>Image upload</Typography>
                                  <div style={{display: 'flex'}}>
                                  <img src={image.data_url} alt="" width="100" />
                                  <div className="image-item__btn-wrapper">
                                      <IconButton onClick={onImageRemoveAll}>
                                          <Delete style={{color: 'red'}}/>
                                      </IconButton>
                                  </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                </ImageUploading>
                </div>
                </section>
            </CardContent>
        </Card>
        </Grid>
        
        <Grid style={{width: '100%'}}>
        <Card className={classes.card}>
            <CardContent>
            <section id='map'>
            <Typography className={classes.subtitle} variant='h3'>Map</Typography>
                <Divider/>
                <div className={classes.areaUpload}>
                {/* <Autocomplete
                    style={{margin: '20px 0'}}
                    options={kategori}
                    renderInput={params => (
                    <TextField {...params} label="Kategori" variant="outlined" />
                  )}
                  getOptionLabel={option => option.kategori}
                  onChange={(_event, kategoris) => {
                    setKategoriId(kategoris._id);
                  }}
                />
                <TextField style={{marginBottom: '20px'}} variant='outlined' id='wisata' label='Nama Wisata'/>
                <Card className={classes.cardDeskripsi}>
                <CardContent className={classes.cardContentDeskripsi}>
                <TextField
                    className={classes.deskripsi}
                    id='deskripsi'
                    label="Description"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                      }}
                    />
                <TextareaAutosize className={classes.deskripsi} placeholder='Description' maxRows={4} id='deskripsi'/>
                </CardContent>
                </Card> */}
                <TextField style={{marginBottom: '20px'}} variant='outlined' id='lat' label='Lat'/>
                <TextField style={{marginBottom: '20px'}} variant='outlined' id='lang' label='Lang'/>
                <TextField style={{marginBottom: '20px'}} variant='outlined' id='url' label='Url Map'/>
                </div>
                </section>
            </CardContent>
        </Card>
        </Grid>
        </div>
        <div style={{marginLeft: '20px', height: '100%', position: 'sticky', top: '10px', width: '50%'}}>
        <Card style={{padding: '20px'}}>
          <Typography style={{marginBottom: '20px'}}>Klik simpan untuk menyimpan data anda kedalam database</Typography>
          <Button fullWidth onClick={handleUpload} variant='contained' color='primary'>Simpan</Button>
        </Card>
      </div>
        </div>
        </Container>
</div>
  )
}

export default Postwisata