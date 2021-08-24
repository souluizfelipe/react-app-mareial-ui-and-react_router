import { Typography } from "@material-ui/core"

const Page = ({ Component, title }) => {
  return(
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>

      <Component />
    </>
  )
}

export default Page