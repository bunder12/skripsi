import React, { useState, useEffect } from 'react'
import { CardContent, Container, Typography, Card, IconButton, Menu, MenuItem, Grid } from '@material-ui/core'
import { MoreVert, Edit, Delete} from '@material-ui/icons'
import axios from 'axios'
import useStyles from './styled'
import TextTruncate from 'react-text-truncate'

const Datawisata = () => {

  const classes = useStyles()
  const [data, setData] = useState([])
  const [kategori, setKategori] = useState([])
  const [anchorEl, setAnchorEl] = useState(null)
  const [id, setId] = useState()
  const open = Boolean(anchorEl)
  // const handleClick = (event) => {
  //   setId(event.currentTarget.tabIndex)
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const getData = async () => {
    const respon = await axios.get(`http://localhost:5000/admin/getDataWisata`)
    setData(respon.data.data);
  }

  const getKategori = async () => {
    const respon = await axios.get(`http://localhost:5000/admin/getkategori`)
    setKategori(respon.data.data);
  }


  useEffect(() => {
    getData();
    getKategori();
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/admin/deleteWisata/${id}`)
  }

  const handleEdit = (id) => {
    console.log(id)
  }
  
  return (
    <div style={{backgroundColor: '#F8FAFD', height: '100vh'}}>
        <Container>
           <Typography>Data Wisata</Typography>
           <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <div className={classes.areaData}>
                    <div className={classes.headRow}>
                    <Typography style={{flexBasis: '24%', paddingLeft: '14px'}}>Data</Typography>
                    <Typography style={{flexBasis: '35%'}}>Deskripsi</Typography>
                    <Typography style={{flexBasis: '14%'}}>Kategori</Typography>
                    <Typography style={{flexBasis: '10%'}}>Lat</Typography>
                    <Typography style={{flexBasis: '10%'}}>Lang</Typography>
                    <Typography style={{flexBasis: '5%'}}>Option</Typography>
                    </div>
                    <Grid style={{backgroundColor: 'white'}}>
                      <CardContent className={classes.cardContentIsi}>
                        {
                          data.map((datas, i) => (
                            <div className={classes.rows}>
                            <div className={classes.col1}>
                              <div style={{display: 'flex', alignItems: 'center', marginRight: '10px'}}>
                                <img style={{width: '40px', height: '40px', borderRadius: '3px'}} src={`http://localhost:5000/admin/getSingleImage/${datas.gambar}`}/>
                              </div>
                              <div style={{display: 'flex', alignItems: 'center'}}>
                              <Typography>{datas.wisata}</Typography>
                              </div>
                            </div>
                            <div className={classes.col2}>
                              <Typography>
                                <TextTruncate
                                line={1}
                                truncateText="…"
                                text={datas.deskripsi}
                                />
                                </Typography>
                            </div>
                            <div className={classes.col3}>
                              {
                                kategori.map(kategoris => (
                                  kategoris._id.includes(datas.kategori_id) && (
                                    <Typography>{kategoris.kategori}</Typography>
                                  ) 
                                ))
                              }
                            </div>
                            <div className={classes.col4}>
                              <Typography>{datas.lat}</Typography>
                            </div>
                            <div className={classes.col5}>
                              <Typography>{datas.lang}</Typography>
                            </div>
                            <div className={classes.col6}>
                              <div onClick={() => handleEdit(datas._id)}>
                                <Edit/>
                              </div>
                              <div onClick={() => handleDelete(datas._id)}>
                                <Delete/>
                              </div>
                            </div>
                            {/* <div className={classes.col6}>
                              <IconButton tabIndex={i} onClick={handleClick}>
                                <MoreVert/>
                              </IconButton>
                              <Menu
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                elevation: 1,
                              }}
                              >
                                <MenuItem>Edit</MenuItem>
                                <MenuItem onClick={() => handleDelete(datas._id)}>Hapus</MenuItem>
                              </Menu>
                            </div> */}
                            </div>
                          ))
                        }
                      </CardContent>
                    </Grid>
                </div>
            </CardContent>
           </Card>
        </Container>
    </div>
  )
}

export default Datawisata