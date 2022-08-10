import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        padding: '0 20px',
        [theme.breakpoints.up('md')]:{
            padding: '0 90px',
        }
    },
    areaTitle: {
        position: 'relative',  
        textAlign: 'center',
        display: 'flex', 
        justifyContent: 'center',
        paddingTop: '100px',
        [theme.breakpoints.up('md')]:{
            paddingTop: '0px'
        }
    },
    areaCard: {
        marginBottom: '80px'
    },
    cardContent: {
        textAlign: 'center',
        margin: '20px',
        backgroundColor: '#F2F2F2',
    },
    card:{
        backgroundColor: '#F2F2F2',
        transform: 'scale(1)',
        transition: '.5s transform ease-in-out',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            transition: '.5s transform ease-in-out'
        }
    },
    title: {
        padding: '0px 0px',
        marginBottom: '80px',
        marginTop: '20px',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50%',
            padding: '0px 80px',
        }
    },
    typogTitle: {
        fontSize: '35px',
        fontWeight: 'bold', 
        marginBottom: '12px',
        [theme.breakpoints.up('md')]: {
            fontSize: '50px',
        }
    },
    areaJoin: {
        padding: '40px 0px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px'
    },
    cardJoin: {
        backgroundColor: '#F2F2F2',
        display: 'flex',
        padding: '30px',
        width: '100%',
        [theme.breakpoints.up('md')]:{
            padding: '30px',
            width: '71.5%',
        }
    },
    cardProtocol: {
        backgroundColor: '#F2F2F2',
        display: 'flex',
        // justifyContent: 'center',
        padding: '30px',
        width: '100%',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]:{
            padding: '30px',
            width: '71.5%',
            flexDirection: 'row',
        }
    },
    imgProtocol:{
        height: '280px', 
        marginRight: '0px',
        [theme.breakpoints.up('md')]:{
            marginRight: '40px',
            height: '140px',
        }
    },
    join: {
        flexGrow: 1, 
        fontWeight: 'bold', 
        display: 'flex', 
        flexDirection: 'column', 
        marginLeft: '10px',
        fontSize: '16px',
        [theme.breakpoints.up('md')]:{
            marginLeft: '30px',
            fontSize: '26px',
        }
    },
    joinImg: {
        height: '40px',
        [theme.breakpoints.up('md')]:{
            height: '60px',
        }
    },
    kotak1: {
        position: 'absolute',
        left: '120px',
        top: '0px',
        [theme.breakpoints.down("md")]:{
            left: '20px',
            width: '120px',
            height: '120px',
        }
    },
    kotak2: {
        width: '80px',
        height: '80px',
        right: '10px',
        top: '20px',
        position: 'absolute',
        [theme.breakpoints.up("md")]:{
            right: '120px',
            width: '120px',
            height: '120px',
        }
    }
}))