import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

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
  const history = useHistory()

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

  const hadleRegisterButton = () => {
    let hasError = false
    let newFormState = {
      ...form,
    }


    if(!form.name.value) {
      hasError = true
      newFormState.name = {
        value: form.name.value, 
        error: true,
        helperText: 'Invalid entry',
      }
    }
    
    if(!form.job.value) {
      hasError = true
      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Invalid entry',
      }

    }
    
    if(hasError){
      return setForm(newFormState)
    }

    axios.post('https://reqres.in/api/users', {
      name: form.name.value, 
      job:  form.job.value,
    }).then(res => console.log('ok' ,res))
    
    history.push('/customers')

  }


  return (
    <>
      <div className={classes.inputWrapper}>
        <TextField 
          name="name" 
          id="name" 
          label="Name" 
          variant="outlined"
          className={classes.input}
          onChange={handleInputChange}
          error={form.name.error}
          helperText={form.name.error ? form.name.helperText : ''}
          />
      </div>
      <div className={classes.inputWrapper}>
        <TextField 
          name="job" 
          id="job" 
          label="Job" 
          variant="outlined"
          className={classes.input}
          onChange={handleInputChange}
          error={form.job.error}
          helperText = {form.job.error ? form.job.helperText : ''}
          />
      </div>
      <div className={classes.inputWrapper}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={hadleRegisterButton}
        >
          Register
        </Button>
      </div>
    </>
  )
}

export default CustomerRegister