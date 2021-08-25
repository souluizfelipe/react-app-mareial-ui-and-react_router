import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    margin: theme.spacing(2),
  },
  input: {
    width: '100%',
    maxWidth: 600,
  },
}))

export default useStyles