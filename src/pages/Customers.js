import { useEffect, useState } from 'react'
import axios from 'axios'
import CustomerCard from '../components/CustmonerCard';
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
  }
}))

const Customers = () => {
  const classes = useStyles()

  const [ customers, setCustomers ] = useState([]);
  
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      const data  = res.data.data
      setCustomers(data)  
      })
  }, [])

  return (
    <>
      <Grid container >
        {
          customers.map((cust) => 
            <Grid xs={12} sm={6} md={4}>
              <CustomerCard 
                name={cust.first_name} 
                lastName={cust.last_name} 
                email={cust.email} 
                avatar={cust.avatar} 
                className={classes.card}
              />
            </Grid >
          )
        }
      </Grid>
    </>
  )
}

export default Customers