import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const User = () => {
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [busData, setBusData] = useState(null);
    const dummyBusData = [
        { busNumber: '12A', start: 'Kozhikode', end: 'calicut University', time: '10:30 AM 11;00 AM 9:00 AM' },
        { busNumber: '45B', start: 'calicut University', end: 'kozhikode', time: '11:00 AM 9:00 AM 11:AM' },
        { busNumber: '78C', start: 'thrissur', end: 'kozhikode', time: '11:15 AM 1:00 PM 2:30' },
        
      ];
      const handleFindBus = () => {
        const foundBus = dummyBusData.find(
            (bus) => bus.start.toLowerCase() === startLocation.toLowerCase() &&
                     bus.end.toLowerCase() === endLocation.toLowerCase()
          );
          setBusData(foundBus);
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
        <Button variant='contained' onClick={handleFindBus}>Find</Button>
        <div>
        {busData ? (
          <div>
            <h2>Bus Information</h2>
            <p><strong>Bus Number:</strong> {busData.busNumber}</p>
            <p><strong>Route:</strong> {busData.start} - {busData.end}</p>
            <p><strong>Time:</strong> {busData.time}</p>
          </div>
        ) : (
          startLocation && endLocation && <p>No bus found for the selected route.</p>
        )}
      </div>
    </div>
  )
}

export default User