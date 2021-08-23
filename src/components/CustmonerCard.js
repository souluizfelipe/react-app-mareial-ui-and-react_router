import { makeStyles } from '@material-ui/core/styles';
import { 
  IconButton, 
  Avatar, 
  CardActions, 
  CardHeader, 
  Card 
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 16
  },
  media: {
    height: 0,
    paddingTop: '56.25%', //16:9
  },
}));

function CustomerCard({ name, lastName, avatar, email }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={avatar}>
            R
          </Avatar>
        }
        title={`${name} ${lastName}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CustomerCard
