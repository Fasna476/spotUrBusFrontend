import React, { useState } from 'react'
import { Button, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit =  (e) => {
     e.preventDefault()
     axios.post('http://localhost:3020/signup' , {username, email, password})
     .then (result => {console.log(result)
     navigate('/signin')})
     .catch(err => console.log(err))
     
  };

  return (
    <div>
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="lavender"
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '32px',
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
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email} 
           onChange={(e) => setEmail(e.target.value)} 
          fullWidth
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <div className="auth-footer">
          Already have an account? <a href="/login">SignIn here</a>
        </div>
      </Box>
    </Box>
    </div>
  )
}

export default Signup