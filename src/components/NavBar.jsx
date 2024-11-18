// import React from 'react'

// import IconButton from '@mui/material/IconButton';
// import { Link } from 'react-router-dom';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { AppBar, Toolbar, Typography, Button, Box, TextField, InputAdornment } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import './Navbar.css'


// const NavBar = () => {
//   return (
//     <div>
//        <Box sx={{ flexGrow: 1 }} className='navbar-container'>

//           <AppBar className='navbar' position="static" color='secondary'>
//               <Toolbar className='toolbar' >
//                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="app-name">
//                      SpotUrBus
//                    </Typography>  
//                    <Box sx={{ display: 'flex', alignItems: 'center',color:'lightpink'}}>
//                     {/* Search bar */}
//                       <TextField 
//                         variant="filled" 
//                         size="small" 
//                         color='success'
//                         placeholder="Search..."
//                         className="search-bar"
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <SearchIcon />
//                             </InputAdornment>
//                           ),
//                         }}
//                      /> 
//                    <Link to="/home" className="nav-link">
//                         <Button variant='text' color='inherit' className="nav-button">home</Button>
//                        </Link>                      
//                    <Link to="/signin" className="nav-link">
//                       <Button className="nav-button" >SIGN IN</Button>
//                    </Link>

//                    <Link to="/user" className="nav-link">
//                        <IconButton
//                           size="large"
//                           edge="end"
//                           color="white"
//                           aria-label="user"
//                           sx={{ mr: 2 }}
//                         ><AccountCircle/>
     
//                          </IconButton>
//                       </Link>
//                   </Box>
    
//                </Toolbar>
//             </AppBar>
//         </Box>


//     </div>
//   )
// }

// export default NavBar


import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Typography } from '@mui/material';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
        <p>spot-your-bus</p>
        </div>

        <div className="navbar-right">
          {/* Search bar */}
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar" 
          />

          <Link to="/" className="nav-link">
            <button className="nav-button">Home</button>
          </Link>

          <Link to="/signin" className="nav-link">
            <button className="nav-button">Login</button>
          </Link>

          <Link to="/user" className="nav-link">
            <button className="nav-button">Account</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
