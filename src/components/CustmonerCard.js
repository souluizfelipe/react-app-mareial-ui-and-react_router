import { useState } from 'react'

import classNames from 'classnames'
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
import ModalConfirm from './ModalConfirm';


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

function CustomerCard({ 
  name,
  lastName, 
  avatar, 
  email, 
  className, 
  removeCustomer,
  }) {
  const classes = useStyles();

  const [ openModal, setOpenModal ] = useState(false)

  const handleToggleModalOpen = () => {
    setOpenModal(!openModal)
  }

  const handleDeleteIconClick = () => {
    handleToggleModalOpen()
  }

  const onRemoveCustomer = (id) => {
    removeCustomer(id)    
    handleToggleModalOpen()
  }
  

  return (
    <>
      <Card className={classNames(className)}>
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
          <IconButton aria-label="edit-customer">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete-customer">
            <DeleteIcon onClick={handleDeleteIconClick} />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm 
        open={openModal}
        onClose={handleToggleModalOpen}
        onConfirm={onRemoveCustomer}
        title="Are you sure you want to delete this customer?"
        message="This action is irrevesible"
      />
    </>
  );
}

export default CustomerCard
