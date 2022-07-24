import React, { useState, useEffect, Fragment } from 'react';
import { Button, Typography, TextField, Card, CardContent, Divider, Box, Grid } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useTheme } from '@material-ui/core';
// import { signInWithGoogle } from "../Firebase";
import { Link, Navigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import axios from 'axios';
import AnimateButton from '../ui-component/extended/AnimateButton';
import logo from '../../assset/google.svg'
import LogoWisata from '../../assset/logo.png'
import useStyles from './styled';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState("")
    const classes = useStyles()
    const theme = useTheme();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    const nama = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const profile = localStorage.getItem("profilePic")

    const firebaseConfig = {
        apiKey: "AIzaSyA0zQiEHsW6Hc_4u_8ZpzjxjsflHvz8nK4",
        authDomain: "login-9a9b3.firebaseapp.com",
        projectId: "login-9a9b3",
        storageBucket: "login-9a9b3.appspot.com",
        messagingSenderId: "459875223765",
        appId: "1:459875223765:web:f92db983dd02240b543a5c",
      };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    
    const loginGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
            localStorage.setItem("token", "profilePic");
            setRedirect(true)
            })
            .catch((error) => {
            console.log(error);
            });
    }

    const handle = () => {
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        const data = {
            username: username,
            password: password
        }

        axios.post('http://localhost:5000/login', data)
        .then(result => {
            if(result) {
                localStorage.setItem('token', result.data.token)
                setRedirect(true)
            }
        }).catch(e => {
            console.log(e.response.data.message)
            setMessage(e.response.data.message)
        })
    }

  return (
    <Fragment>
        {
            redirect &&(
                <Navigate to="/"/>
            )
        }
    <div className={classes.container}>
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Grid style={{textAlign: 'center', padding: '10px', paddingRight: '80px', paddingLeft: '80px'}}>
                    <img style={{height: '40px', width: '40px'}} src={LogoWisata} alt='logoWisata'/>
                    <Typography className={classes.title} variant='h5' gutterBottom>Welcome Login</Typography>
                    <Typography className={classes.miniText} variant='subtitle'>Enter your account to continue</Typography>
                </Grid>
                <Grid>
                    <AnimateButton>
                    <Button
                    fullWidth
                    className={classes.btnLogin}
                    variant='contained'
                    onClick={loginGoogle}
                    >
                        <img style={{marginRight: '6px'}} src={logo}/>
                        Sign in with Google
                    </Button>
                    </AnimateButton>
                </Grid>
                <Grid style={{padding: '20px', position: 'relative'}}>
                    <Divider style={{marginBottom: '15px'}}/>
                    <Button style={{position: 'absolute', left: '40%', top: '8%', backgroundColor: 'white'}} variant='contained' disabled>OR</Button>
                </Grid>
                <Grid style={{textAlign: 'center', marginBottom: '10px'}}>
                    <Typography variant='subtitle'>Sign in with Email address</Typography>
                </Grid>
                <Grid className={classes.inputLogin}>
                <TextField style={{marginBottom: '12px'}} id="username" label="Email Addres / username" variant="outlined" />
                <div className={classes.password}>
                    <TextField id='password' style={{width: '100%'}} type={showPassword ? 'text' : 'password'} label="password" variant="outlined" />
                    <div className={classes.visibility}>
                    {showPassword ? <Visibility onClick={handleClickShowPassword} /> : <VisibilityOff onClick={handleClickShowPassword}/>}
                    </div>
                </div>
                <Typography component={Link} to='/forgotpassword' style={{cursor: 'pointer', textDecoration: 'none'}} variant='subtitle' color='primary'>Forgot Password?</Typography>
                <AnimateButton>
                    <Button fullWidth onClick={handle} style={{ marginTop: '12px'}} variant='contained' color='primary'>Masuk</Button>
                </AnimateButton>
                <Typography style={{color: 'red', marginTop: '12px', textAlign: 'center'}}>{message}</Typography>      
                </Grid>
                <Grid style={{textAlign: 'center', marginTop: '20px'}}>
                    <Divider style={{marginBottom: '15px'}}/>
                    <Typography component={Link} to='/register' style={{cursor: 'pointer', textDecoration: 'none'}}>Don't have an account?</Typography>
                </Grid>
            </CardContent>
        </Card>
    </div>
    </Fragment>
  )
}

export default Login