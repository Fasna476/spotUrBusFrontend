
import {  Typography,  Box, Container, Grid } from '@mui/material';
import { Button, TextField, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Axios } from 'axios';
import React, { useState } from 'react'


const Home = () => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [busResults, setBusResults] = useState([]);

  const handleFindRoute = async () => {
    try {
      const response = await fetch(`http://localhost:3020/api/busDetails?start=${startLocation}&end=${endLocation}`);
      if (!response.ok) throw new Error("No buses found");
      
      const data = await response.json();
      setBusResults(data.buses); // Update state with bus data to render it
    } catch (error) {
      console.error("Error fetching bus details:", error);
    }
  };
  return (
    <div>
         <h1>Welcome </h1> 
       <TextField id="outlined-basic" 
       label=" Start location" 
       variant="outlined"
        value={startLocation}
        onChange={(e) => setStartLocation(e.target.value)}
        /> &nbsp;

        <TextField id="outlined-basic" 
        label="End location" 
        variant="outlined"
        value={endLocation}
        onChange={(e) => setEndLocation(e.target.value)} 

        /> <br/><br/>
        <Button  variant='contained' onClick={handleFindRoute} color='secondary'>Find</Button>

        {/* Display bus details in a table */}
      {busResults.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Bus Name</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Start location</TableCell>
              <TableCell>End location</TableCell>
              <TableCell>Time</TableCell>
              {/* <TableCell>reach time</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {busResults.map((bus, index) => (
              <TableRow key={index}>
                <TableCell>{bus.name}</TableCell>
                <TableCell>{bus.number}</TableCell>
                <TableCell>{bus.type}</TableCell>
                <TableCell>{bus.startStop}</TableCell>                
                <TableCell>{bus.endStop}</TableCell>
                <TableCell>{bus.startArrivalTime.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")}</TableCell>
                {/* <TableCell>{bus.endArrivalTime.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
     


      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#41094fde',
          color: '#fff',
          py: 3,
          mt: 4,
        }}
      >
        <Typography align="center" variant="body1">
          &copy; 2024 SpoturBus. All rights reserved.
        </Typography>
      </Box>

    </div>
  )
}

export default Home