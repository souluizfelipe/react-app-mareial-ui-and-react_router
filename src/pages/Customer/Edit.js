import { useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"

import { 
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core"

import useStyles from "./Customers.styles"
import Toasty from "../../components/Toasty"

const CustomerEdit = ({ id, name, job }) => {
  const classes = useStyles()
  const history = useHistory()

  const [ toasty, setToasty ] = useState({
    open: false,
    message: '',
    severity: '',
  })

  const [ isLoading, setIsLoading ] = useState(true)

  const [ form, setForm ] = useState({
    name: {
      value: '',
      error: false,
    },
    job: {
      value: '',
      error: false,
    }
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

  setForm({
      ...form,
      [name]: {
        ...form[name],
        value,
      }
    })
  }

  const hadleEditButton = () => {
    setIsLoading(false)

    let hasError = false
    let newFormState = {
      ...form
    }

    if(!form.name.value) {
      hasError = true
      newFormState.name = {
        value: form.name.value,
        error: true
      }
    }

    if(!form.job.value) {
      hasError = true
      newFormState.job = {
        value: form.job.value,
        error: true
      }
    }

    if(hasError) {
      setToasty({
        open: true,
        message: 'Something is wrong, try looking in to it',
        severity: 'error',
      })
      
      setIsLoading(true)
      return setForm(newFormState)
    }

    axios.post('https://reqres.in/api/users', {
      name: form.name.value,
      job: form.job.value,
    }).then(() => {
      setToasty({
        open: true,
        message: 'New customer added with success',
        severity: 'success',
      })
    })

    setTimeout(() => {
      history.push('/customers')
    }, 1500)
  }

  return(
    <>
      <div className={classes.inputWrapper}>
        <TextField 
          className={classes.input}
          name="name"
          id="name"
          label="Name"
          variant="outlined"
          onChange={handleInputChange}
          error={form.name.error}
          value={name}
          />
      </div>
      <div className={classes.inputWrapper}>
        <TextField 
          className={classes.input}
          name="job"
          id="job"
          label="Job"
          variant="outlined"
          onChange={handleInputChange}
          error={form.job.error}
          value={job}
        />
      </div>
      <div className={classes.inputWrapper}>
        {isLoading 
          ? <Button 
            variant="contained" 
            color="primary" 
            onClick={hadleEditButton}
            >
             Edit
            </Button>
          : <CircularProgress />
        }
      </div>
      <Toasty 
        open={toasty.open}
        message={toasty.message}
        severity={toasty.severity}
        closing={() => setToasty({...Toasty, open: false})}
      />
    </>
  )
}

export default CustomerEdit