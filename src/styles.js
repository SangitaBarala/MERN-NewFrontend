import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 13,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  subheading: {
    color: 'rgb(128,4,62)',
    fontSize:'x-large',
    fontWeight:'bold',
    fontFamily:'Helvetica sans-serif',
    marginBottom:'10px'
  },
  image: {
    marginLeft: '15px',
  },
}));
