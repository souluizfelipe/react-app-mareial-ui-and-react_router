import {
  TextField, 
  Button, 
  makeStyles 
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    margin: theme.spacing(2),
  },
  input: {
    width: '100%',
    maxWidth: 600,
  },
}))

const CustomerRegister = () =>  {
  const classes = useStyles()
  
  return (
    <>
      <div className={classes.inputWrapper}>
        <TextField 
          name="name" 
          id="outlined-basic" 
          label="Name" 
          variant="outlined"
          className={classes.input}
          />
      </div>
      <div className={classes.inputWrapper}>
        <TextField 
          name="job" 
          id="outlined-basic" 
          label="Job" 
          variant="outlined"
          className={classes.input}
          />
      </div>
      <div className={classes.inputWrapper}>
        <Button 
          variant="contained" 
          color="primary" 
        >
          Register
        </Button>
      </div>
    </>
  )
}

export default CustomerRegister