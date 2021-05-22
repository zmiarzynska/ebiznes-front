import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        overflow: "hidden",
        boxShadow: '0px 0px 15px -5px'

    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',

    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));