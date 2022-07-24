import React, { useState, useEffect } from 'react'
import { Typography, Input, Button, TextField, Avatar } from '@material-ui/core';
import { AccountCircle, Delete, PhotoCamera, Visibility, VisibilityOff, ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useStyles from './styled'

const Profile = ({dataUser}) => {

    const [profile, setProfile] = useState(
        localStorage.getItem("profilePic") ? true : false
        )
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();
    // const [dataUser, setDataUser] = useState([])

    const autorization = () => {
        const token = localStorage.getItem("token");
        axios.get('http://localhost:5000/getUser', {
        headers: {
        'Authoriz': token
        }
    })
    .then((res) => {
    console.log(res.data.data)
    })
    .catch((error) => {
    console.error(error)
    })
    }

    useEffect(() => {
    if(profile === true){
        autorization()
        }
    }, [])

    const myProfile = localStorage.getItem("profilePic")
    const nama = localStorage.getItem("name")
    const email = localStorage.getItem("email")

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEdit = () => {
        document.getElementById('edit').disabled = false;
        document.getElementById('save').disabled = false;
    }

    const handlePhoto = () => {
        const photo = document.querySelector("#photo").value;
        console.log(photo)
    }

    console.log(dataUser)

  return (
    <div className={classes.container}>
        <Button className={classes.arrowBack} component={Link} to="/">
        <ArrowBack style={{fontSize: '40px'}}/>
        </Button>
        <div className={classes.content}>
        <Typography style={{marginBottom: '20px', fontWeight: 'bold'}} variant='h3'>My Profil</Typography>
        <Typography>Foto Profil Anda</Typography>
        <div className={classes.areaPhoto}>
        {
            profile? <Avatar style={{borderRadius: '100%', height: '120px', width: '120px'}} src={myProfile} alt="noProfile"/> : <AccountCircle style={{fontSize: '120px'}}/>
        }
        <div className={classes.areaBtn}>
        <label htmlFor="photo">
        <Input onChange={handlePhoto} style={{display: 'none'}} accept="image/*" id="photo" multiple type="file" />
        <Button style={{marginBottom: '16px'}} variant="contained" component="span" color='primary' startIcon={<PhotoCamera/>}>
            Change Photo
        </Button>
        </label>
        <Button variant="contained" color="secondary" startIcon={<Delete/>}>
        Delete
      </Button>
        </div>
        </div>
        <Typography style={{fontSize: '15px', color: 'gray', textAlign: 'center', marginBottom: '20px'}} variant='subtitle'>Masukan Gambar dengan ukuran 210 x 210px</Typography>
        <label style={{marginBottom: '12px'}}>Username</label>
        <TextField style={{marginBottom: '20px'}} id='ed' variant='outlined' value={profile? nama : dataUser.username} disabled/>
        <label style={{marginBottom: '12px'}}>Email</label>
        <TextField style={{marginBottom: '20px'}} id='edi' variant='filled' value={profile? email : dataUser.email} disabled/>
        <label style={{marginBottom: '12px'}}>Password</label>
        <div className={classes.password}>
            <TextField id='edit' style={{width: '100%'}} type={showPassword ? 'text' : 'password'} variant="outlined" value="123456" disabled/>
            <div className={classes.visibility}>
            {showPassword ? <Visibility onClick={handleClickShowPassword} /> : <VisibilityOff onClick={handleClickShowPassword}/>}
            </div>
        </div>
        <Button id='save' style={{marginBottom: '12px'}} variant='contained' color='primary' disabled>Save</Button>

        <Button onClick={handleEdit} variant='contained' color='inherit'>Edit</Button>
        </div>
    </div>
  )
}

export default Profile