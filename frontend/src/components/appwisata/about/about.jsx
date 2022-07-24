import React, { useEffect } from 'react'
import { Button, Card, CardContent, Grid, Typography, ListItemIcon } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Like from '../../../assset/like.svg';
import Map from '../../../assset/map.svg';
import Gratis from '../../../assset/gratis.svg';
import Publik from '../../../assset/people.svg';
import Mudah from '../../../assset/easy.svg';
import Join from '../../../assset/join.svg';
import Kotak1 from '../../../assset/kotak1.svg';
import Kotak2 from '../../../assset/kotak2.svg';
import Fitur from '../../../assset/fitur.svg';
import Algo from '../../../assset/algo.svg';
import Destinasi from '../../../assset/destination.svg';
import useStyles from './styled'
import { Link } from 'react-router-dom';
import click from '../../../assset/like.json'
import Lottie from 'lottie-web';
import Gabung from '../../../assset/animate/handshake.json'
import Cari from '../../../assset/animate/radar.json'
import Telusuri from '../../../assset/animate/navigation.json'

const About = () => {

    const classes = useStyles();

    const rekBB = [
        {
            img: <div id='cari' style={{width: '80px'}}/>,
            title: 'Cari Wisata',
            subtitle: 'Anda dapat menggunakan fitur search untuk mencari wisata'
        },
        {
            img: <div style={{width: '80px'}} id='likes'/>,
            title: 'Rekomendasi',
            subtitle: 'Anda dapat menggunakan fitur Rekomendasi jika bingung'
        },
        {
            img: <div id='telusuri' style={{width: '80px'}}/>,
            title: 'Telusuri',
            subtitle: 'Telusuri wisata bangka belitung jika sudah anda temukan'
        }
    ];

const dataRek = [
    {
        img: <img src={Gratis}/>,
        title: 'Gratis',
        subtitle: 'Tidak dikenakan biaya dalam menggunakan RekBB'
    },
    {
        img: <img src={Publik}/>,
        title: 'Publik',
        subtitle: 'Terbuka untuk umum siapa saja dapat menggunakan'
    },
    {
        img: <img src={Mudah}/>,
        title: 'Mudah',
        subtitle: 'RekBB mudah digunakan dalam mencari wisata'
    },
    {
        img: <img style={{height:'60px'}} src={Join}/>,
        title: 'Join',
        subtitle: 'Join dengan rekBB sangat mudah, tinggal lakukan Registrasi'
    },
    {
        img: <img src={Fitur}/>,
        title: 'Fitur',
        subtitle: 'Banyak fitur menarik, salah satunya system rekomendasi'
    },
    {
        img: <img src={Algo}/>,
        title: 'Algoritma',
        subtitle: 'System rekomendasi Menggunakan Algoritma '
    },
    {
        img: <img src={Destinasi}/>,
        title: 'Destinasi',
        subtitle: 'Banyak pilihan wisata yang dapat dikunjungi'
    },
    {
        img: <img src={Map}/>,
        title: 'Map',
        subtitle: 'Langsung dihubungkan dengan map, tinggal terlusuri wisatanya'
    },
];

useEffect(() => {
    Lottie.loadAnimation({
        container: document.getElementById('likes'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: click,
        // path: click // the path to the animation json
      });

      Lottie.loadAnimation({
        container: document.getElementById('cari'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Cari,
      });

      Lottie.loadAnimation({
        container: document.getElementById('telusuri'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Telusuri,
      });

}, [click, Cari, Telusuri])

useEffect(() => {
    Lottie.loadAnimation({
        container: document.getElementById('Gabung'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Gabung,
        // path: click // the path to the animation json
      });
}, [Gabung])

  return (
    <div className={classes.container}>
        <div className={classes.areaTitle}>
            <img className={classes.kotak1} src={Kotak1}/>
            <img className={classes.kotak2} src={Kotak2}/>
            <div className={classes.title}>
            <Typography className={classes.typogTitle} variant='h3'>Apa itu RekBB?</Typography>
            <Typography variant='subtitle'>
                RekBB merupakan kepanjangan dari <sapn style={{fontWeight: 'bold'}}>Rekreasi Bangka Belitung</sapn> yaitu Website yang dapat mempermudah anda dalam mencari destinasi wisata yang ada di bangka belitung
            </Typography>
            </div>
        </div>
        <Grid className={classes.areaCard} container justify="center" spacing={8}>
            {
                rekBB.map((rekBBs) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                        <ListItemIcon>
                            {rekBBs.img}
                        </ListItemIcon>
                        <Typography style={{fontWeight: '600', marginBottom: 10}} variant='h5'>{rekBBs.title}</Typography>
                        <Typography>
                            {rekBBs.subtitle}
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                ))
            }
        </Grid>
        <div className={classes.areaJoin}>
            <div className={classes.cardJoin}>
                <div className={classes.joinImg} id='Gabung'/>
            <Typography className={classes.join} variant='h5'>Join bersama <span>RekBB</span></Typography>
            <Button style={{backgroundColor: '#09DE1F', color: '#1E293B', fontWeight: '600'}} component={Link} to="/register" variant='contained' color='primary'>Registrasi</Button>
            </div>
        </div>
        <div className={classes.areaTitle}>
            <div className={classes.title}>
            <Typography className={classes.typogTitle} variant='h3'>Cari Wisata?</Typography>
            <Typography variant='subtitle'><span style={{fontWeight: 'bold'}}>Pakai RekBB!!!</span> Beberapa alasan wisatawan menggunakan RekBB</Typography>
            </div>
        </div>
        <Grid className={classes.areaCard} container justify="center" spacing={8}>
            {
                dataRek.map((dataReks) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                    <ListItemIcon>
                        {dataReks.img}
                    </ListItemIcon>
                    <Typography style={{fontWeight: '600', marginBottom: 10}} variant='h5'>{dataReks.title}</Typography>
                    <Typography>
                        {dataReks.subtitle}
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                ))
            }
        </Grid>
    </div>
  )
}

export default About