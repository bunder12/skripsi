import React from 'react'
import { Toolbar, AppBar, Typography, Button, Container } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import useStyles from './styled'

const Navbar = () => {

  const classes = useStyles();
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div>
      {
        location.pathname === '/'? null:(
      <AppBar className={classes.appBar}>
        <Container>
        <Toolbar className={classes.toolbar}>
          <div style={{flexGrow: 1}}>
          <Typography component={Link} to='/dashboard' style={{marginRight: '20px', cursor: 'pointer', textDecoration: 'none', color: 'white'}}>Dashboard</Typography>
          <Typography component={Link} to='/post-wisata' style={{marginRight: '20px',cursor: 'pointer', textDecoration: 'none', color: 'white'}}>Post Wisata</Typography>
          <Typography component={Link} to='/data-wisata' style={{cursor: 'pointer', textDecoration: 'none', color: 'white'}}>Data Wisata</Typography>
          </div>
          <Button variant='contained' color='secondary'>Logout</Button>
        </Toolbar>
        </Container>
      </AppBar>
        )
      }
    </div>
  )
}

export default Navbar