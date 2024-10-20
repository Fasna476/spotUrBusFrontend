import { Button, TextField } from '@mui/material'
import React from 'react'

const User = () => {
  return (
    <div>
       <h1>Welcome Back</h1> 
       <TextField id="outlined-basic" label=" Start location" variant="outlined" /> &nbsp;
        <TextField id="outlined-basic" label="End location" variant="outlined" /> <br/><br/>
        <Button variant='contained'>Find</Button>
    </div>
  )
}

export default User