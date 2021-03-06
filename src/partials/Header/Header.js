import { useState } from 'react'
import { useHistory } from 'react-router'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import EditIcon from '@material-ui/icons/Edit'

import useStyles from './Header.styles'

const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  const [ menuOpen, setMenuOpen ] = useState(false) 

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handlePageChange = (route) => {
    history.push(route)
    handleToggleMenu()
  }

  return(
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu" onClick={() => handleToggleMenu()} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            My React App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()} > 
        <List className={classes.list}>
          <ListItem button onClick={() => handlePageChange('/')}>
            <ListItemIcon> 
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handlePageChange('/customers')}>
            <ListItemIcon> 
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button onClick={() => handlePageChange('/customers/add')}>
            <ListItemIcon> 
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Customers Register" />
          </ListItem>
          <ListItem button onClick={() => handlePageChange('/customers/edit')}>
            <ListItemIcon> 
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Customers Edit" />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Header