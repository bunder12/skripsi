import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    btnLogin: {
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: '#FAFAFA',
        marginBottom: '20px',
        boxShadow: 'none'
    },
    container: {
        backgroundColor: "#E5F7FB",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputLogin: {
        display: 'flex',
        flexDirection: 'column',
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
    cardContent: {
        margin: '2px',
        [theme.breakpoints.up('sm')]: {
            margin: '37px'
        }
    },
    card: {
        margin: '0 15px',
        padding: '0 15px',
        [theme.breakpoints.up('sm')]: {
            margin: '0 5px'
        }
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        [theme.breakpoints.up('sm')]: {
            fontSize: '28px',
            fontWeight: 'bold'
        }
    },
    miniText: {
        width: '100%',
        fontSize: '8px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '12px',
        }
    }
}))