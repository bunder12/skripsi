import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#E5F7FB",
        height: '100vh'
    },
    password: {
        position: 'relative',
        marginBottom: '10px'
    },
    visibility: {
        position: 'absolute',
        right: '6%',
        top: '30%'
    },
    card: {
        padding: '40px 0',
        margin: '0px 20px',
        [theme.breakpoints.up('sm')]: {
            margin: '0px'
        }
    },
    cardContent: {
        flexDirection: 'column', 
        display: 'flex',
        padding: '20px 0px',
        margin: '0px 60px',
        [theme.breakpoints.up('sm')]: {
            margin: '0px 60px',
            padding: '50px 0px',
        }
    },
    title: {
        textAlign: 'center', 
        marginBottom: '12px', 
        width: '100%', 
        [theme.breakpoints.up('sm')]: {
            width: '330px'
        }
    }
}))