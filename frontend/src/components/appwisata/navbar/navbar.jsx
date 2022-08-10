import React, { useState } from 'react'
import { AppBar, Button, Grid, IconButton, InputBase, MenuItem, Toolbar, Typography, Menu, Divider, Avatar, ListItemIcon, Container, Box } from '@material-ui/core'
import { Search, AccountCircle, Bookmark, Close, ChevronRight, KeyboardArrowDown } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, Navigate } from 'react-router-dom'
// import Links from '@material-ui/core/Link'
import AnimateButton from '../../ui-component/extended/AnimateButton'
import LogoNav from '../../../assset/logoNav.svg'
import useStyles from './styled'

const Navbar = ({dataUser, refAbout, refHome, refContact, refKategori, refRekomendasi}) => {


    //mobile
    function showAboutMobile() {
        window.scrollTo({
          top: refAbout.current.offsetTop - 30,
          behavior: "smooth"
        })
        setOpen(!open)
      }

      function showHomeMobile() {
        window.scrollTo({
          top: refHome.current.offsetTop - 30,
          behavior: "smooth"
        })
        setOpen(!open)
      }

      function showContactMobile() {
        window.scrollTo({
          top: refContact.current.offsetTop - 30,
          behavior: "smooth"
        })
        setOpen(!open)
      }

      function showKategoriMobile() {
        window.scrollTo({
          top: refKategori.current.offsetTop - 30,
          behavior: "smooth"
        })
        setOpen(!open)
      }

      function showRekomendasiMobile() {
        window.scrollTo({
          top: refRekomendasi.current.offsetTop - 30,
          behavior: "smooth"
        })
      }

      //Desktop
      function showAbout() {
        window.scrollTo({
          top: refAbout.current.offsetTop - 30,
          behavior: "smooth"
        })
      }

      function showHome() {
        window.scrollTo({
          top: refHome.current.offsetTop - 30,
          behavior: "smooth"
        })
      }

      function showContact() {
        window.scrollTo({
          top: refContact.current.offsetTop - 30,
          behavior: "smooth"
        })
      }

      function showKategori() {
        window.scrollTo({
          top: refKategori.current.offsetTop - 30,
          behavior: "smooth"
        })
        setSubMenuDesktop(!subMenuDesktop)
      }

      function showRekomendasi() {
        window.scrollTo({
          top: refRekomendasi.current.offsetTop - 30,
          behavior: "smooth"
        })
      }

    const [profil, setProfil] = useState(null)
    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState(false)
    const [subMenuDesktop, setSubMenuDesktop] = useState(false)
    const [profile, setProfile] = useState(
        localStorage.getItem("profilePic") ? true : false
        )
    const [login, setLogin] = useState(
        localStorage.getItem('token')? true : false
    )
    const classes = useStyles();

    const myProfile = localStorage.getItem("profilePic")
    const myName = localStorage.getItem("name")

    const handleProfile = (event) => {
        setProfil(event.currentTarget);
    }

    const handleMenuClose = () => {
        setProfil(null);
        // handleMobileMenuClose();
      };

    const handleLogout = () => {
        localStorage.clear("token")
        window.location.href = '/';
    }

    const handleLogin = () => {
        window.location.href = '/login';
    }


    const isMenuOpen = Boolean(profil);
    const menuId = 'account-menu';
    const renderMenu = (
        <Menu
          anchorEl={profil}
          id={menuId}
          keepMounted
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .Acoun': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
          }}
        >
        {
            login && (    
                <div>
                    <MenuItem component={Link} to="/profile">
                        <AccountCircle style={{marginRight: '10px'}}/> Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/favorite">
                        <Bookmark style={{marginRight: '10px'}}/>Favorite
                    </MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                        <ion-icon name="exit-outline"/>
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </div>          
            )
        }
        { !login && (
            <div>
                <MenuItem component={Link} to="/login">Login</MenuItem>
                <MenuItem component={Link} to="/register">Register</MenuItem>
            </div>
        )}
          
        </Menu>
      );

  return (
    <div className={classes.container}>
        <AppBar className={classes.appBar}>
            <Container>
            <Toolbar className={classes.toolbar}>
                <Grid className={classes.menuIcon}>
                {
                    open? <Close onClick={()=> setOpen(!open)}/> : <MenuIcon onClick={()=> setOpen(!open)}/>
                }
                </Grid>
                <Grid className={classes.areaLogo}>
                    <img style={{height: '100%', width: '120px'}} src={LogoNav} alt='logoNav'/>
                </Grid>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <Search/>
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                {
                    open && (
                        <div className={classes.menuMobile}>
                            <MenuItem onClick={showHomeMobile} style={{marginRight: '16px'}}>Home</MenuItem>
                            <MenuItem onClick={showAboutMobile} style={{marginRight: '16px'}}>About</MenuItem>
                            <MenuItem onClick={() => setSubMenu(!subMenu)} style={{marginRight: '16px', display: 'flex'}}>
                                <div style={{flexGrow: 1, display: 'flex', alignItems: 'center'}}>Explore</div>
                                <span>
                                {
                                    subMenu? <KeyboardArrowDown/> : <ChevronRight/>
                                }
                                </span>
                            </MenuItem>
                            {
                                subMenu && (
                                <div className={classes.subMenu}>
                                    <MenuItem component={Link} to="/all-destinasi">All Destinasi</MenuItem>
                                    <MenuItem onClick={login? showKategoriMobile:handleLogin}>Kategori</MenuItem>
                                    <MenuItem onClick={login? showRekomendasiMobile:handleLogin}>Rekomendasi</MenuItem>
                                </div>
                                )
                            }
                            <MenuItem onClick={showContactMobile} style={{marginRight: '16px'}}>Contact</MenuItem>
                        </div>
                    )
                }
                <div className={classes.menuDesktop}>
                <Typography onClick={showHome} style={{marginRight: '16px'}} variant='subtitle1'>Home</Typography>
                <Typography onClick={showAbout} style={{marginRight: '16px'}} variant='subtitle1'>About</Typography>
                <Typography onClick={()=> setSubMenuDesktop(!subMenuDesktop)} style={{marginRight: '16px'}} variant='subtitle1'>
                    Explore
                    {
                        subMenuDesktop? <KeyboardArrowDown/> : <KeyboardArrowDown/>
                    }
                </Typography>
                {
                    subMenuDesktop && (
                    <div style={{ position: 'absolute', top: '44px', left: '100px'}}>
                        <Box style={{backgroundColor: '#1E293B'}}>
                        <MenuItem component={Link} to="/all-destinasi">All Destinasi</MenuItem>
                        <MenuItem onClick={login? showKategori:handleLogin}>Kategori</MenuItem>
                        <MenuItem onClick={login? showRekomendasi:handleLogin}>Rekomendasi</MenuItem>
                        </Box>
                    </div>
                    )
                }
                <Typography onClick={showContact} style={{marginRight: '16px'}} variant='subtitle1'>Contact</Typography>
                </div>
                {
                    !login && (
                        <div>
                            <Grid className={classes.areaBtn}>
                            <AnimateButton>
                            <Button className={classes.btnMasuk} variant='outlined' component={Link} to="/login">Login</Button>
                            </AnimateButton>
                            <AnimateButton>
                            <Button className={classes.btnDaftar} variant='contained' component={Link} to="/register">Register</Button>
                            </AnimateButton>
                            </Grid>
                        </div>
                    )
                }
                {
                    login && (
                            <div className={classes.desktopProfil}>
                                <IconButton
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={handleProfile}
                                >
                                    <Typography variant='subtitle1'>{myName}{dataUser.username}</Typography>
                                    {
                                        profile? <Avatar style={{borderRadius: '100%', width: '40px', height: '40px', marginLeft: '12px'}} src={myProfile} alt="noProfile"/> : <AccountCircle style={{fontSize: '40px', marginLeft: '12px'}}/>
                                    }
                                </IconButton>
                            </div>
                    )
                }
                <div className={classes.mobileProfil}>
                    <IconButton
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleProfile}
                    >
                        {
                                        profile? <Avatar style={{borderRadius: '100%', width: '40px', height: '40px', marginLeft: '12px'}} src={myProfile} alt="noProfile"/> : <AccountCircle style={{fontSize: '40px', marginLeft: '12px'}}/>
                                    }
                    </IconButton>
                </div>
            </Toolbar>
        </Container>
        </AppBar>
        {renderMenu}
    </div>
  )
}

export default Navbar