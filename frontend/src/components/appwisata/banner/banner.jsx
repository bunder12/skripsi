import { Button, Container, Toolbar, Tooltip, Typography } from '@material-ui/core';
import React from 'react'
import icon from '../../../assset/icon.svg'
import ilustrasi from '../../../assset/ilustrasi.png'
import ilustrasi2 from '../../../assset/ilustrasi2.png'
import Fade from 'react-reveal/Fade'
import useStyles from './styled'
import { Link } from 'react-router-dom';

const Banner = () => {

  const classes = useStyles();

  return (
    <div className={classes.container} >
      <Container className={classes.container}>
      <div className={classes.areaText}>
      <Fade left delay={300}>
      <Typography className={classes.title} variant='h1'>CARI WISATA BANGKA BELITUNG BERSAMA KAMI RekBB</Typography>
      </Fade>
      <Fade left delay={600}>
      <Typography className={classes.subtitle} variant='subtitle'>Mudah dengan kami untuk mencari wisata bangka belitung, dan ada fitur-fitur menarik didalam app kami, mari gunakan RekBB untuk mempermudah rekreasi wisata anda di Bangka Belitung</Typography>
      </Fade>
      <Fade left delay={900}>
      <div className={classes.areaBtn}>
      <Button component={Link} to="/all-destinasi" style={{backgroundColor: '#000A44', fontWeight: 'bold'}} variant='contained' color="primary">All Destinasi</Button>
      </div>
      </Fade>
      {/* <Button variant='outlined' color="primary">Login</Button> */}
      </div>
      <div className={classes.areaIcon}>
        <Fade right delay={300}>
          <img className={classes.img} src={ilustrasi2} alt='icon'/>
        </Fade>
      </div>
      </Container>
    </div>
  )
}

export default Banner