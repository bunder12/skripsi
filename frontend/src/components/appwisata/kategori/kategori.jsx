import React from 'react'
import { Button, Card, CardContent, CardMedia, Grid, Typography, ListItemIcon, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Pantai from '../../../assset/kategori/beach.png';
import Danau from '../../../assset/kategori/danau.png';
import Sejarah from '../../../assset/kategori/sejarah.png'
import Airterjun from '../../../assset/kategori/airterjun.png'
import useStyles from './styled'

const Kategori = () => {

    const classes = useStyles();

    const kategoriData = [
        {
            title: 'Pantai',
            img: <img style={{height: '100px'}} src={Pantai}/>,
            url: '/kategori-pantai'
        },
        {
            title: 'Sejarah',
            img: <img style={{height: '100px'}} src={Sejarah}/>,
            url: '/kategori-sejarah'
        },
        {
            title: 'Danau',
            img: <img style={{height: '100px'}} src={Danau}/>,
            url: '/kategori-danau'
        },
        {
            title: 'Air Terjun',
            img: <img style={{height: '100px'}} src={Airterjun}/>,
            url: '/kategori-airterjun'
        },
    ];

  return (
      <main className={classes.content}>
        <Container>
      <div className={classes.toolbar}/>
      <div className={classes.titleContent}>
         <Typography variant='h4'>Kategori wisata</Typography>
      </div>
          <div className={classes.toolbar}/>
        <Grid container justify='center' spacing={10}>
            {kategoriData.map((kategoriDatas) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <div className={classes.media}>
                            <ListItemIcon>
                                {kategoriDatas.img}
                            </ListItemIcon>
                        </div>
                        <CardContent className={classes.cardContent}>
                            <Button component={Link} to={kategoriDatas.url} fullWidth variant='contained' color='primary'>{kategoriDatas.title}</Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        <div className={classes.toolbar}/>
        </Container>
      </main>

  )
}

export default Kategori