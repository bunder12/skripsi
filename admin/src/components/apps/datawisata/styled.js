import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    card: {
        backgroundColor: '#F1F6FC',
    },
    cardContent: {

    },
    cardContentIsi: {
        display:'flex',
        flexDirection: 'column'
    },
    areaData: {
        display: 'flex',
        flexDirection: 'column'
    },
    headRow: {
        backgroundColor: '#F1F6FC',
        width: '100%',
        display: 'flex',
    },
    row: {
        backgroundColor: '#FFFFFF',
    },
    rows: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        marginBottom: '20px'
    },
    col1:{
        flexBasis: '25%',
        display: 'flex'
    },
    col2:{
        flexBasis: '36%',
    },
    col3:{
        flexBasis: '14%',
    },
    col4:{
        flexBasis: '10%',
    },
    col5:{
        flexBasis: '10%',
    },
    col6:{
        flexBasis: '5%',
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'space-between'
    }
}))