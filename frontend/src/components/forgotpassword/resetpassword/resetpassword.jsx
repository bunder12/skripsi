import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import axios from 'axios'
import useStyles from './styled'

const Resetpassword = () => {

    
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles(); 
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const { token } = useParams();

    const handleSavePassword = () => {
        const newPassword = document.querySelector('#newPassword').value
        const konfirPass = document.querySelector('#konfirPass').value
        const data ={
            password: newPassword,
            konfirPass: konfirPass,
            token: token
        }

        axios.put('https://rekomend.herokuapp.com/resetpassword', data)
        .then(result => {
           console.log(result)
        }).catch(e => {
            console.log(e.response.data.message)
        })

    }

  return (
    <div className={classes.container}>
        <Card className={classes.card}>
            <CardContent>
                <Typography style={{marginBottom: '40px', fontWeight: 'bold'}} variant='h5'>Welcome Reset Password</Typography>
                <div className={classes.password}>
                        <TextField id='newPassword' style={{width: '100%'}} type={showPassword ? 'text' : 'password'} label="New Password" variant="outlined" />
                        <div className={classes.visibility}>
                        {showPassword ? <Visibility onClick={handleClickShowPassword} /> : <VisibilityOff onClick={handleClickShowPassword}/>}
                        </div>
                </div>
                <TextField id='konfirPass' style={{width: '100%', marginBottom: '20px'}} type={showPassword ? 'text' : 'password'} label="Konfirmasi Password" variant="outlined" />
                <Button onClick={handleSavePassword} fullWidth variant='contained' color='primary'>Save Password</Button>
                
            </CardContent>
        </Card>
    </div>
  )
}

export default Resetpassword