import React from 'react'
import { Typography } from '@material-ui/core'
import LogoFooter from '../../../assset/logoFooter.svg'
import useStyles from './styled'

const Footer = ({refContact}) => {

    const classes = useStyles()

  return (
    <main ref={refContact}>
    <div className={classes.container}>
        <div className={classes.areaFooter}>
        <div className={classes.img}>
        <img className={classes.image} src={LogoFooter}/>
        <Typography className={classes.titleImg} variant='subtitle1'>
            Tempat untuk mencari wisata yang ada di <span>Bangka Belitung</span>
        </Typography>
        </div>
        <div className={classes.contact}>
            <Typography className={classes.title} variant='h5'>Contact</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>Email</Typography>
            <Typography variant='subtitle1'>No.telp</Typography>
        </div>
        <div className={classes.socialMedia}>
            <Typography className={classes.title} variant='h5'>Social Media</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>Facebook</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>Instagram</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>WhatsApp</Typography>
            <Typography variant='subtitle1'>Twitter</Typography>
        </div>
        <div className={classes.helpDesk}>
            <Typography className={classes.title} variant='h5'>Help Desk</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>About</Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>FAQs</Typography>
            <Typography variant='subtitle1'>Contact</Typography>
        </div>
        </div>
        <div className={classes.areaLabel}>
            <Typography className={classes.labelText} variant='subtitle1'>
                @2022 RekBB Rekreasi Bangka Belitung Made with Fajri, 
                <a style={{ color: 'white'}} href="https://www.flaticon.com" title="All icons"> All Icons created by netscript - Flaticon</a>
            </Typography>
        </div>
    </div>
    </main>
  )
}

export default Footer