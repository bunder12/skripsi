import { makeStyles, alpha } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        flexGrow: 1,
    },
    appBar: {
        boxShadow: 'none',
        backgroundColor: '#1E293B',
        position: 'fixed'
    },
    toolbar: {
       backgroundColor: '#1E293B',
      //  padding: '0 14px',
      //  [theme.breakpoints.up('md')]: {
      //   padding: '0 90px',
      //  }
    },
    menuProfil: {
      position: 'absolute',
      top: '10px'
    },
    mobileProfil: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    desktopProfil: {
            display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        }
    },
    menuIcon: {
        display: 'flex',
        marginRight: '22px',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    areaLogo: {
        marginLeft: '8px', 
        marginRight: '8px',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            // marginLeft: '20px', 
            marginRight: '80px',
            display: 'flex'
        }
    },
    areaBtn: {
        // marginLeft: '720px',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        }
    },
    menuDesktop: {
        flexGrow: 1,
        display: 'none',
        cursor: 'pointer',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        }
    },
    menuMobile: {
      position: 'absolute',
      backgroundColor: '#1E293B',
      top: '60px',
      left: '0px',
      right: '0'
    },
    subMenu: {
      paddingLeft: '20px',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      btnMasuk: {
        color: '#09DE1F',
        marginRight: '12px',
        fontWeight: 'bold',
        borderColor: '#09DE1F'
      },
      btnDaftar: {
        backgroundColor: '#09DE1F',
        color: '#000A44',
        fontWeight: 'bold',
        "&:hover": {
            backgroundColor: '#07B919',
        }
      }
}))