import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: "#E5F7FB",
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
    card: {
        padding: '60px 10px',
        margin: '20px',
        [theme.breakpoints.up('sm')]: {
            padding: '60px',
        }
    },
}))