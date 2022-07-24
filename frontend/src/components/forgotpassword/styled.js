import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: "#E5F7FB",
    },
    card: {
        padding: '60px 10px',
        margin: '20px',
        [theme.breakpoints.up('sm')]: {
            padding: '60px',
        }
    },
    cardContent: {
        
    }
}))