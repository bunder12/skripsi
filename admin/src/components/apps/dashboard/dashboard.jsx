import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { CardContent, Card, Typography, Container } from '@material-ui/core'


const Dashboard = () => {

  const token = localStorage.getItem('tokenAdmin')
  const [member, setMember] = useState([])
  const [dataWisata, setDataWisata] = useState([])

  const getMember = async () => {
    const respon = await axios.get(`http://localhost:5000/admin/getMember`)
    setMember(respon.data.data);
  }

  const getDataWisata = async () => {
    const respon = await axios.get(`http://localhost:5000/admin/getDataWisata`)
    setDataWisata(respon.data.data);
  }

  useEffect(() => {
    getDataWisata();
    getMember();
  }, [])

  if(!token){
    return <Navigate to='/'/>
  }

  return (
    <div style={{backgroundColor: 'gray', height: '100vh'}}>
      <Container>
      <Card style={{marginBottom: '10px'}}>
        <CardContent>
          <Typography>Total Admin</Typography>
          1
        </CardContent>
      </Card>
      <Card style={{marginBottom: '10px'}}>
        <CardContent>
          <Typography>Total Member</Typography>
          {member.length}
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <Typography>Total Wisata</Typography>
          {dataWisata.length}
        </CardContent>
      </Card>
      </Container>
    </div>
  )
}

export default Dashboard