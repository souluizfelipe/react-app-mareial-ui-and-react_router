import { Container, makeStyles } from "@material-ui/core";

import Header from "../partials/Header/Header"

const useStyles = makeStyles({
  spacing: {
    padding: '16px 0',
  }
})

const Default = ({ children }) => {
  
  const classes = useStyles()

  return (
    <>
      <Header />
      <Container className={classes.spacing} >
        {children}
      </Container>
    </>
  )
}

export default Default