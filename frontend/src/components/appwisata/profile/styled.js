import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '50px'
        // backgroundColor: '#C0E4F8'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: '40px'
    },
    password: {
        position: 'relative',
        marginBottom: '10px'
    }, 
    visibility: {
        position: 'absolute',
        right: '10%',
        top: '30%'
    },
    arrowBack: {
        position: 'absolute',
        left: '5px',
        top: '5px',
        // fontSize: '40px',
        [theme.breakpoints.up('sm')]: {
            left: '40px',
            top: '40px',
        }
    },
    areaPhoto: {
        display: 'flex',
        padding: '0 20px',
    },
    areaBtn: {
        display: 'flex',
        flexDirection: 'column',
        padding: '6px 6px',
        [theme.breakpoints.up('sm')]: {
            padding: '20px 20px',
        }
    }
}))