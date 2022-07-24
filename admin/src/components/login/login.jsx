import React, { Fragment, useState } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import useStyles from './styled'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {

  const [showPass, setShowPass] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const classes = useStyles();

  const handleLogin = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const data = {
      username: username,
      password: password
    }

    axios.post(`http://localhost:5000/admin/login`, data)
    .then(res => {
      if(res){
        localStorage.setItem('tokenAdmin', res.data.token)
        setRedirect(true)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Fragment>
      {
        redirect && (
          <Navigate to='dashboard'/>
        )
      }
    <div className={classes.container}>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography>Login Admin</Typography>
          <TextField style={{margin: '20px 0'}} id='username' variant='outlined' label='username'/>
          <div className={classes.password}>
          <TextField type={showPass? 'text' : 'password'} id='password' style={{marginBottom: '20px'}} variant='outlined' label='password'/>
          <div className={classes.visibility}>
          {
            showPass? <Visibility onClick={() => setShowPass(!showPass)}/> : <VisibilityOff onClick={() => setShowPass(!showPass)}/>
          }
          </div>
          </div>
          <Button onClick={handleLogin} variant='contained' color='primary'>Masuk</Button>
        </CardContent>
      </Card>
    </div>
    </Fragment>
  )
}

export default Login