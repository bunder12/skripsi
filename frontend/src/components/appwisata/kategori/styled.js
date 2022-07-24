import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginBottom: '40px'
    },
    titleContent: {
        textAlign: 'center'
    },
    media: {
        height: 100,
        display: 'flex',
        padding: '20px 0px',
        justifyContent: 'center',
        transform: 'scale(1)',
        transition: '.5s transform ease-in-out',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.2)',
            transition: '.5s transform ease-in-out'
        }
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        paddingTop: 30
    },
}))