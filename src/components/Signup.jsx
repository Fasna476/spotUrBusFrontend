import React from 'react'
import { Button, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()

  const handleSubmit=()=>{
    navigate('/user')
  }
  return (
    <div>
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '24px',
          bgcolor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography 
         variant="h4"
         align="center"
         sx={{
           fontWeight: 'bold',
           fontFamily: 'Times New Roman',
           color: 'black', // Using Material UI's primary color
           marginBottom: '16px',
           letterSpacing: '1.2px',
         }}>
          Sign Up
        </Typography>

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
    </div>
  )
}

export default Signup