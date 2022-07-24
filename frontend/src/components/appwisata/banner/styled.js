import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container:{
        height: '90vh', 
        // backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            textAlign: 'left'
        }
    },
    areaIcon: {
        flexBasis: '0',
        marginTop: '0px',
        display: 'flex',
        justifyContent: 'center',
        textAlign:'center',
        [theme.breakpoints.up('md')]: {
            flexBasis: '50%',
            marginTop: '140px',
            justifyContent: 'flex-end',
        }
    },
    areaText: {
        flexBasis: '0',
        marginTop: '90px',
        // padding: '0 30px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexBasis: '50%',
            marginTop: '220px',
        }
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        color: '#000A44',
        [theme.breakpoints.up('md')]: {
            fontSize: '54px',
        }
    },
    subtitle: {
        fontSize: '15px',
        color: '#A3A3A3',
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
        }
    },
    img: {
        height: '310px',
        width: '310px',
        [theme.breakpoints.up('md')]: {
            height: '78%',
            width: '78%',
        }
    },
    areaBtn: {
        marginTop: '20px',
        [theme.breakpoints.up('md')]: {
            marginTop: '40px',
        }
    }
}))