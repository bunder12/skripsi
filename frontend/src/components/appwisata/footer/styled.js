import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        marginTop: '80px',
        backgroundColor: '#1E293B',
    },
    areaFooter: {
        padding: '90px 30px',
        display: 'flex',
        color: '#ffffff',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]:{
            flexDirection: 'row',
            padding: '90px',
        }
    },
    socialMedia: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '0px',
        marginBottom: '40px',
        [theme.breakpoints.up('md')]:{
            marginRight: '120px',
        }
    },
    helpDesk: {
        display: 'flex',
        flexDirection: 'column'
    },
    contact: {
        display: 'flex',
        flexDirection: 'column',
        margin: '40px 0px',
        [theme.breakpoints.up('md')]:{
            marginRight: '120px',
            margin: '0px 0px',
        }
    },
    areaLabel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        color:'#FFFFFF',
        padding: '20px 0px',
        borderTop: 'solid 0.5px rgba(245, 245, 245, .45)',
    },
    labelText:{
        fontSize: '10px',
        [theme.breakpoints.up('md')]:{
            fontSize: '16px'
        }
    },
    image: {
        width: '300px',
        height: '100px',
        [theme.breakpoints.up('md')]:{
            width: '100%',
            height: '100px',
        }
    },
    img: {
        marginRight: '120px'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: '20px'
    },
    subtitle: {
        marginBottom: '18px'
    },
    titleImg:{
        display: 'flex', 
        flexDirection: 'column', 
        width: '300px',
        marginBottom: '30px',
        [theme.breakpoints.up('md')]:{
            width: '100%',
            marginBottom: '0px',
        }
    }
}))