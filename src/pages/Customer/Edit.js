import { useState } from "react"
import { 
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core"

import useStyles from "./Customers.styles"

const CustomerEdit = ({ id, name, job }) => {
  const classes = useStyles()

  const [ isLoading, setIsLoading ] = useState(true)

  return(
    <>
      <div className={classes.inputWrapper}>
        <TextField 
          className={classes.input}
          id="name"
          label="Name"
          variant="outlined"
        />
      </div>
      <div className={classes.inputWrapper}>
        <TextField 
          className={classes.input}
          id="job"
          label="Job"
          variant="outlined"
        />
      </div>
      <div className={classes.inputWrapper}>
        {isLoading 
          ? <Button 
            variant="contained" 
            color="primary" 
            // onClick={hadleRegisterButton}
            >
             Register
            </Button>
          : <CircularProgress />
        }
      </div>
    </>
  )
}

export default CustomerEdit