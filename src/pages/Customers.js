import { useEffect, useState } from 'react'
import axios from 'axios'
import CustomerCard from '../components/CustmonerCard';

const Customers = () => {

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
      <h1>Customers</h1>

      {
        customers.map((cust) => {
          return(
            <CustomerCard 
              name={cust.first_name} 
              lastName={cust.last_name} 
              email={cust.email} 
              avatar={cust.avatar} 
            />
          )
        })
      }

    </>
  )
}

export default Customers