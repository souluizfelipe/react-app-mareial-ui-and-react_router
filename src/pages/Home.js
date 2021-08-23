import Header from "../partials/Header/Header"
import { Button } from '@material-ui/core'

const Home = () => {
  return(
    <>
      <Header />
      <Button variant="contained" color="secondary" >Hello</Button>
    </>
  )
}

export default Home