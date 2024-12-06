
import { Button, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit =  (e) => {
    e.preventDefault()
    axios.post('http://localhost:3020/signin' , { email, password})
    .then (result => {console.log(result)
      if(result.data === "admin success")
        navigate('/admindashboard')
      else if(result.data === "user success")
        navigate('/');
      else if (result.data === "the password is incorrect") 
        alert("Incorrect password, please try again.");
      else if (result.data === "No record exists") 
        alert("No account found with this email.");
      })
      
    .catch(err => 
      console.log(err))
    
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
          padding: '35px',
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
          }}
        >
          Sign In
        </Typography>
        
        <TextField
          label="Email"
          variant="outlined"
          value={email} 
         onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
        />

        <TextField
          label="Password"
          variant="outlined"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
         
          type="password"
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <div >
          Don’t have an account? <a href="/signup">SignUp here</a>
        </div>
      </Box>
    </Box>
    </div>
  )
}

export default Signin