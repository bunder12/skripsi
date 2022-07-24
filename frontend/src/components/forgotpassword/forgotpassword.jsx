import React, { useState } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import axios from 'axios';
import useStyles from './styled'
import AnimateButton from '../ui-component/extended/AnimateButton';

const Forgotpassword = () => {

    const [alert, setAlert] = useState("")
    const classes = useStyles();

    const handleKirim = () => {
        const email = document.querySelector('#email').value;
        const data = {
            email: email
        }

        axios.put('http://localhost:5000/forgotpassword', data)
        .then(result => {
           setAlert(result.data.message)
        }).catch(e => {
            // console.log(e.response.data.message)
        })
    }

  return (
    <div className={classes.container}>
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
            <Typography style={{marginBottom: '40px', fontWeight: 'bold'}} variant='h5'>Welcome Forgot Password</Typography>
            <TextField id='email' style={{marginBottom: '20px'}} fullWidth label="Email Addres" variant="outlined" />
            <AnimateButton>
            <Button onClick={handleKirim} variant='contained' fullWidth color='primary'>Send Link Reset</Button>
            </AnimateButton>
            <Typography>{alert}</Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default Forgotpassword