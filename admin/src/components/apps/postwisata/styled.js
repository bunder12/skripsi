import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    section: {
        padding: '0 20px',
        backgroundColor: '#F8FAFD',
        [theme.breakpoints.up('sm')]: {
            padding: '0 240px',
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    card: {
        width: '100%',
        marginBottom: '40px'
    },
    areaUpload: {
        display: 'flex',
        flexDirection: 'column'
    },
    deskripsi: {
        width: '100%',
        border: 'none',
        outline: 'none',
    },
    cardDeskripsi: {
        marginBottom: '20px',
    },
    cardContentDeskripsi: {
        
    },
    title: {
        fontSize: '36px',
        fontWeight: 'bold',
        margin: '20px'
    },
    subtitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '20px'
    },
    uploadImg: {
        border: '2px dashed gray',
        borderRadius: '4px',
        // backgroundColor: 'gray',
        height: '240px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outputImg:{
        margin: '10px 0',
    }
})) 