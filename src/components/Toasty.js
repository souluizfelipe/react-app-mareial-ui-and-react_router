import { Snackbar } from '@material-ui/core/';
import { Alert } from '@material-ui/lab/';


const Toasty = ({ message, open, severity, closing }) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    // closing()
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      > 
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Toasty