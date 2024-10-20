import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';

import FitbitIcon from '@mui/icons-material/Fitbit';

const NavBar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>

<AppBar position="static">
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <FitbitIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      SpotUrBus
    </Typography>
    
    &nbsp;
    <Link to="/signin">
    <Button variant='contained' color='primary'>SIGN IN</Button>
    </Link>
    &nbsp;
    <Link to="/signup">
    <Button variant='contained' color='primary'>SIGN UP</Button>
    </Link>
    &nbsp;&nbsp;&nbsp;
    <Link to="/user">
    <IconButton
      size="large"
      edge="end"
      color="white"
      aria-label="user"
      sx={{ mr: 2 }}
    ><AccountCircle/>
     
    </IconButton>
    </Link>
    
  </Toolbar>
</AppBar>
</Box>

    </div>
  )
}

export default NavBar