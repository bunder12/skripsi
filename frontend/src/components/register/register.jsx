import React, { useState } from 'react'
import { Button, Card, CardContent, TextField, Typography, Grid, Divider } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import LogoWisata from '../../assset/logo.png'
import AnimateButton from '../ui-component/extended/AnimateButton';
import axios from 'axios';
import useStyles from './styled'

const Register = () => {
    const [validation, setValidation] = useState("")
    const [validationSucces, setValidationsucces] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleDaftar = () => {
        const username = document.querySelector("#userDaftar").value;
        const email = document.querySelector("#emailDaftar").value;
        const password = document.querySelector("#passDaftar").value;
        const konfirPass = document.querySelector("#konfirPassDaftar").value;

        const data = {
            username: username,
            email: email,
            password: password,
            konfirPass: konfirPass,
        }

        axios.post('https://rekomend.herokuapp.com/daftar', data)
        .then(result => {
            setValidationsucces(result.data.message)
        }).catch(e => {
            setValidation(e.response.data.message)
        })
    }

  return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Grid style={{display: 'flex', justifyContent: 'center', marginBottom: '8px'}}>
                    <img style={{heigth: '90px', width: '90px'}} src={LogoWisata} alt='LogoWisata' />
                    </Grid>
                    <Typography className={classes.title}>Sign up with Email address</Typography>
                    <Typography style={{color:'red'}}>{validation}</Typography>
                    <Typography style={{color:'blue'}}>{validationSucces}</Typography>
                    <Grid style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <TextField fullWidth id='userDaftar' style={{marginBottom: "12px"}} label="Username" variant="outlined"/>
                    <TextField fullWidth id='emailDaftar' style={{marginBottom: "12px"}} label="Email address" variant="outlined"/>
                    <div className={classes.password}>
                        <TextField id='passDaftar' style={{width: '100%'}} type={showPassword ? 'text' : 'password'} label="password" variant="outlined" />
                        <div className={classes.visibility}>
                            {showPassword ? <Visibility onClick={handleClickShowPassword} /> : <VisibilityOff onClick={handleClickShowPassword}/>}
                        </div>
                    </div>
                    <div className={classes.password}>
                        <TextField id='konfirPassDaftar' style={{width: '100%'}} type={showPassword ? 'text' : 'password'} label="Konrifmasi Password" variant="outlined" />
                    </div>
                    <AnimateButton>
                    <Button fullWidth onClick={handleDaftar} variant='contained' color='primary'>Daftar</Button>
                    </AnimateButton>
                    </Grid>
                    <Grid style={{textAlign: 'center', marginTop: '20px'}}>
                    <Divider style={{marginBottom: '15px'}}/>
                    <Typography component={Link} to='/login' style={{cursor: 'pointer', textDecoration: 'none'}}>Already have an account?</Typography>
                    </Grid>
                </CardContent>
            </Card>
        </div>

  )
}

export default Register