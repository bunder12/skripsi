import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    password: {
        position: 'relative'
    },
    visibility: {
        position: 'absolute',
        right: '14px',
        top: '17px',
        zIndex: 1
    }
}))