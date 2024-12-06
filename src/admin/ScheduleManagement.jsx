// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ScheduleManagement.css'

// const ScheduleManagement = () => {
//   const [schedules, setSchedules] = useState([]);
//   const [schedule, setSchedule] = useState(null);
//   const [busId, setBusId] = useState('');
//   const [routeId, setRouteId] = useState('');
//   const [stopTimes, setStopTimes] = useState([]);
//   const [editingSchedule, setEditingSchedule] = useState(null);
//   const [newStopTime, setNewStopTime] = useState('');

//   // Fetch all schedules
//   useEffect(() => {
//     const fetchSchedules = async () => {
//       try {
//         const response = await axios.get('http://localhost:3020/api/schedules'); // Replace with your endpoint
//         setSchedules(response.data);
//       } catch (error) {
//         console.error('Error fetching schedules:', error);
//       }
//     };
//     fetchSchedules();
//   }, []);
//   const fetchSchedule = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3020/schedule/${busId}`);
//       setSchedule(response.data);
//     } catch (error) {
//       console.error('Error fetching schedule:', error);
//     }
//   };

//   // Add a new schedule
//   const addSchedule = async () => {
//     if (!busId || !routeId || stopTimes.length === 0) {
//       alert('Please provide all fields');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:3020/api/addSchedule', {
//         busId,
//         routeId,
//         stopTimes,
//       });
//       setSchedules((prev) => [...prev, response.data]);
//       setBusId('');
//       setRouteId('');
//       setStopTimes([]);
//     } catch (error) {
//       console.error('Error adding schedule:', error);
//     }
//   };

//   // Update a schedule
//   const updateSchedule = async () => {
//     if (!editingSchedule || !busId || !routeId || stopTimes.length === 0) {
//       alert('Please provide all fields');
//       return;
//     }
//     try {
//       const response = await axios.put(
//         `http://localhost:3020/api/schedules/update/${editingSchedule._id}`,
//         {
//           busId,
//           routeId,
//           stopTimes,
//         }
//       );
//       setSchedules((prev) =>
//         prev.map((schedule) =>
//           schedule._id === editingSchedule._id ? response.data : schedule
//         )
//       );
//       setEditingSchedule(null);
//       setBusId('');
//       setRouteId('');
//       setStopTimes([]);
//     } catch (error) {
//       console.error('Error updating schedule:', error);
//     }
//   };

//   // Delete a schedule
//   const deleteSchedule = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3020/api/schedules/delete/${id}`);
//       setSchedules((prev) => prev.filter((schedule) => schedule._id !== id));
//     } catch (error) {
//       console.error('Error deleting schedule:', error);
//     }
//   };

//   // Add a stop time
//   const addStopTime = () => {
//     if (newStopTime) {
//       setStopTimes((prev) => [...prev, newStopTime]);
//       setNewStopTime('');
//     }
//   };

//   // Remove a stop time
//   const removeStopTime = (index) => {
//     setStopTimes((prev) => prev.filter((_, i) => i !== index));
//   };

//   // Start editing a schedule
//   const startEditing = (schedule) => {
//     setEditingSchedule(schedule);
//     setBusId(schedule.busId);
//     setRouteId(schedule.routeId);
//     setStopTimes(schedule.stopTimes);
//   };

//   return (
//     <div className="schedule-management">
//       <h2>Schedule Management</h2>
//       {schedule && (
//         <div className="schedule-details">
//           <h3>Schedule for Bus: {schedule.bus}</h3>
//           <h4>Route: {schedule.route}</h4>
//           <div>
//             <h5>Arrival Times</h5>
//             <ul>
//               {schedule.arrivalTime?.map((time, index) => (
//                 <li key={index}>
//                   Stop: {time.stopName} | Arrival Time: {time.arrivalTime}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <button onClick={() => setIsEditing(true)}>Edit Schedule</button>
//           <button onClick={handleDeleteSchedule}>Delete Schedule</button>
//         </div>
//       )}

//       {/* Add or Edit Schedule */}
//       <div className="form">
//         <input
//           type="text"
//           placeholder="Bus ID"
//           value={busId}
//           onChange={(e) => setBusId(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Route ID"
//           value={routeId}
//           onChange={(e) => setRouteId(e.target.value)}
//         />
//         <div>
//           <input
//             type="text"
//             placeholder="Add Stop Time"
//             value={newStopTime}
//             onChange={(e) => setNewStopTime(e.target.value)}
//           />
//           <button onClick={addStopTime}>Add Stop Time</button>
//         </div>
//         <ul>
//           {stopTimes.map((time, index) => (
//             <li key={index}>
//               {time} <button onClick={() => removeStopTime(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//         {editingSchedule ? (
//           <button onClick={updateSchedule}>Update Schedule</button>
//         ) : (
//           <button onClick={addSchedule}>Add Schedule</button>
//         )}
//       </div>

//       {/* List of Schedules */}
//       <table>
//         <thead>
//           <tr>
//             <th>Bus ID</th>
//             <th>Route ID</th>
//             <th>Stop Times</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {schedules.map((schedule) => (
//             <tr key={schedule._id}>
//               <td>{schedule.busId}</td>
//               <td>{schedule.routeId}</td>
//               <td>
//                 {schedule.stopTimes.map((time, index) => (
//                   <span key={index}>{time} </span>
//                 ))}
//               </td>
//               <td>
//                 <button onClick={() => startEditing(schedule)}>Edit</button>
//                 <button onClick={() => deleteSchedule(schedule._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ScheduleManagement;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ScheduleManagement.css";

// const ScheduleManagement = () => {
//   const [schedules, setSchedules] = useState([]);
//   const [buses, setBuses] = useState([]);
//   const [routes, setRoutes] = useState([]);
//   const [busId, setBusId] = useState("");
//   const [routeId, setRouteId] = useState("");
//   const [stopTimes, setStopTimes] = useState([]);
//   const [newStopTime, setNewStopTime] = useState("");
//   const [editingSchedule, setEditingSchedule] = useState(null);

//   // Fetch all schedules
//   useEffect(() => {
//     try{
//     axios.get('http://localhost:3020/api/schedule/${busId}')
//       .then((response) => setSchedules(response.data))}
//       catch (error) {
//               console.error('Error fetching schedule:', error);
//             }
      
//   }, []);

//   // Fetch buses and routes
//   useEffect(() => {
//     const fetchBusesAndRoutes = async () => {
//       try {
//         const busResponse = await axios.get("http://localhost:3020/buses");
//         const routeResponse = await axios.get("http://localhost:3020/routes");
//         setBuses(busResponse.data);
//         setRoutes(routeResponse.data);
//       } catch (error) {
//         console.error("Error fetching buses or routes:", error);
//       }
//     };
//     fetchBusesAndRoutes();
//   }, []);

//   // Add a new schedule
//   const addSchedule = async () => {
//     if (!busId || !routeId || stopTimes.length === 0) {
//       alert("Please provide all fields");
//       return;
//     }
//     try {
//       const response = await axios.post("http://localhost:3020/addSchedule", {
//         busId,
//         routeId,
//         stopTimes,
//       });
//       setSchedules((prev) => [...prev, response.data]);
//       resetForm();
//     } catch (error) {
//       console.error("Error adding schedule:", error);
//     }
//   };

//   // Update a schedule
//   const updateSchedule = async () => {
//     if (!editingSchedule || !busId || !routeId || stopTimes.length === 0) {
//       alert("Please provide all fields");
//       return;
//     }
//     try {
//       const response = await axios.put(
//         `http://localhost:3020/schedules/update/${editingSchedule._id}`,
//         {
//           busId,
//           routeId,
//           stopTimes,
//         }
//       );
//       setSchedules((prev) =>
//         prev.map((schedule) =>
//           schedule._id === editingSchedule._id ? response.data : schedule
//         )
//       );
//       resetForm();
//     } catch (error) {
//       console.error("Error updating schedule:", error);
//     }
//   };

//   // Delete a schedule
//   const deleteSchedule = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3020/schedules/delete/${id}`);
//       setSchedules((prev) => prev.filter((schedule) => schedule._id !== id));
//     } catch (error) {
//       console.error("Error deleting schedule:", error);
//     }
//   };

//   // Add a stop time
//   const addStopTime = () => {
//     if (newStopTime) {
//       setStopTimes((prev) => [...prev, newStopTime]);
//       setNewStopTime("");
//     }
//   };

//   // Remove a stop time
//   const removeStopTime = (index) => {
//     setStopTimes((prev) => prev.filter((_, i) => i !== index));
//   };

//   // Start editing a schedule
//   const startEditing = (schedule) => {
//     setEditingSchedule(schedule);
//     setBusId(schedule.busId);
//     setRouteId(schedule.routeId);
//     setStopTimes(schedule.stopTimes);
//   };

//   const resetForm = () => {
//     setEditingSchedule(null);
//     setBusId("");
//     setRouteId("");
//     setStopTimes([]);
//     setNewStopTime("");
//   };

//   return (
//     <div className="schedule-management">
//       <h2>Schedule Management</h2>

//       {/* Add or Edit Schedule */}
//       <div className="form">
//         <select
//           value={busId}
//           onChange={(e) => setBusId(e.target.value)}
//           required
//         >
//           <option value="" disabled>
//             Select Bus
//           </option>
//           {buses.map((bus) => (
//             <option key={bus._id} value={bus._id}>
//               {bus.number} - {bus.name}
//             </option>
//           ))}
//         </select>

//         <select
//           value={routeId}
//           onChange={(e) => setRouteId(e.target.value)}
//           required
//         >
//           <option value="" disabled>
//             Select Route
//           </option>
//           {routes.map((route) => (
//             <option key={route._id} value={route._id}>
//               {route.name}
//             </option>
//           ))}
//         </select>

//         <div>
//           <input
//             type="text"
//             placeholder="Add Stop Time"
//             value={newStopTime}
//             onChange={(e) => setNewStopTime(e.target.value)}
//           />
//           <button onClick={addStopTime}>Add Stop Time</button>
//         </div>
//         <ul>
//           {stopTimes.map((time, index) => (
//             <li key={index}>
//               {time}{" "}
//               <button onClick={() => removeStopTime(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//         {editingSchedule ? (
//           <button onClick={updateSchedule}>Update Schedule</button>
//         ) : (
//           <button onClick={addSchedule}>Add Schedule</button>
//         )}
//       </div>

//       {/* List of Schedules */}
//       <table>
//         <thead>
//           <tr>
//             <th>Bus Number</th>
//             <th>Route Name</th>
//             <th>Stop Times</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {schedules.map((schedule) => (
//             <tr key={schedule._id}>
//               <td>
//                 {buses.find((bus) => bus._id === schedule.busId)?.number || "N/A"}
//               </td>
//               <td>
//                 {routes.find((route) => route._id === schedule.routeId)?.name ||
//                   "N/A"}
//               </td>
//               <td>
//                 {schedule.stopTimes.map((time, index) => (
//                   <span key={index}>{time} </span>
//                 ))}
//               </td>
//               <td>
//                 <button onClick={() => startEditing(schedule)}>Edit</button>
//                 <button onClick={() => deleteSchedule(schedule._id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ScheduleManagement;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ScheduleManagement.css';

// const ScheduleManagement = () => {
//   const [schedules, setSchedules] = useState([]);
//   const [buses, setBuses] = useState([]);
//   const [routes, setRoutes] = useState([]);
//   const [busNumber, setBusNumber] = useState('');
//   const [routeName, setRouteName] = useState('');
//   const [stopTimes, setStopTimes] = useState([]);
//   const [newStopTime, setNewStopTime] = useState('');
//   const [direction, setDirection] = useState('forward');
//   const [editingSchedule, setEditingSchedule] = useState(null);

//   useEffect(() => {
//     // Fetch all buses and routes
//     const fetchData = async () => {
//       try {
//         const busesResponse = await axios.get('http://localhost:3020/buses');
//         const routesResponse = await axios.get('http://localhost:3020/routes');
//         setBuses(busesResponse.data);
//         setRoutes(routesResponse.data);
//       } catch (error) {
//         console.error('Error fetching buses or routes:', error);
//       }
//     };
//     fetchData();

//     // Fetch all schedules
//     const fetchSchedules = async () => {
//       try {
//         const response = await axios.get('http://localhost:3020/schedules');
//         setSchedules(response.data);
//       } catch (error) {
//         console.error('Error fetching schedules:', error);
//       }
//     };
//     fetchSchedules();
//   }, []);

//   // Add a new schedule
//   const addSchedule = async () => {
//     try {
//       const bus = buses.find((b) => b.number === busNumber);
//       const route = routes.find((r) => r.name === routeName);

//       if (!bus || !route || stopTimes.length === 0) {
//         alert('Please provide valid Bus Number, Route Name, and Stops');
//         return;
//       }

//       const stops = direction === 'backward' ? [...stopTimes].reverse() : stopTimes;

//       const response = await axios.post('http://localhost:3020/addSchedule', {
//         busId: bus._id,
//         routeId: route._id,
//         stopTimes: stops,
//         direction,
//       });

//       setSchedules((prev) => [...prev, response.data]);
//       resetForm();
//     } catch (error) {
//       console.error('Error adding schedule:', error);
//     }
//   };

//   // Update an existing schedule
//   const updateSchedule = async () => {
//     try {
//       const bus = buses.find((b) => b.number === busNumber);
//       const route = routes.find((r) => r.name === routeName);

//       if (!bus || !route || stopTimes.length === 0) {
//         alert('Please provide valid Bus Number, Route Name, and Stops');
//         return;
//       }

//       const stops = direction === 'backward' ? [...stopTimes].reverse() : stopTimes;

//       const response = await axios.put(
//         `http://localhost:3020/schedules/update/${editingSchedule._id}`,
//         {
//           busId: bus._id,
//           routeId: route._id,
//           stopTimes: stops,
//           direction,
//         }
//       );

//       setSchedules((prev) =>
//         prev.map((schedule) =>
//           schedule._id === editingSchedule._id ? response.data : schedule
//         )
//       );
//       resetForm();
//     } catch (error) {
//       console.error('Error updating schedule:', error);
//     }
//   };

//   // Delete a schedule
//   const deleteSchedule = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3020/schedules/delete/${id}`);
//       setSchedules((prev) => prev.filter((schedule) => schedule._id !== id));
//     } catch (error) {
//       console.error('Error deleting schedule:', error);
//     }
//   };

//   // Reset the form
//   const resetForm = () => {
//     setBusNumber('');
//     setRouteName('');
//     setStopTimes([]);
//     setNewStopTime('');
//     setDirection('forward');
//     setEditingSchedule(null);
//   };

//   // Add a stop time
//   const addStopTime = () => {
//     if (newStopTime) {
//       setStopTimes((prev) => [...prev, newStopTime]);
//       setNewStopTime('');
//     }
//   };

//   // Remove a stop time
//   const removeStopTime = (index) => {
//     setStopTimes((prev) => prev.filter((_, i) => i !== index));
//   };

//   // Start editing a schedule
//   const startEditing = (schedule) => {
//     setEditingSchedule(schedule);
//     setBusNumber(schedule.busId.number);
//     setRouteName(schedule.routeId.name);
//     setStopTimes(schedule.stopTimes);
//     setDirection(schedule.direction);
//   };

//   return (
//     <div className="schedule-management">
//       <h2>Schedule Management</h2>

//       {/* Add or Edit Schedule */}
//       <div className="form">
//         <select value={busNumber} onChange={(e) => setBusNumber(e.target.value)}>
//           <option value="">Select Bus</option>
//           {buses.map((bus) => (
//             <option key={bus._id} value={bus.number}>
//               {bus.number}
//             </option>
//           ))}
//         </select>

//         <select value={routeName} onChange={(e) => setRouteName(e.target.value)}>
//           <option value="">Select Route</option>
//           {routes.map((route) => (
//             <option key={route._id} value={route.name}>
//               {route.name}
//             </option>
//           ))}
//         </select>

//         <div>
//           <input
//             type="text"
//             placeholder="Add Stop Time"
//             value={newStopTime}
//             onChange={(e) => setNewStopTime(e.target.value)}
//           />
//           <button onClick={addStopTime}>Add Stop</button>
//         </div>
//         <ul>
//           {stopTimes.map((time, index) => (
//             <li key={index}>
//               {time} <button onClick={() => removeStopTime(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>

//         <div>
//           <label>Direction:</label>
//           <select value={direction} onChange={(e) => setDirection(e.target.value)}>
//             <option value="forward">Forward</option>
//             <option value="backward">Backward</option>
//           </select>
//         </div>

//         {editingSchedule ? (
//           <button onClick={updateSchedule}>Update Schedule</button>
//         ) : (
//           <button onClick={addSchedule}>Add Schedule</button>
//         )}
//         <button onClick={resetForm}>Reset</button>
//       </div>

//       {/* List of Schedules */}
//       <table>
//         <thead>
//           <tr>
//             <th>Bus Number</th>
//             <th>Route Name</th>
//             <th>Direction</th>
//             <th>Stop Times</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {schedules.map((schedule) => (
//             <tr key={schedule._id}>
//               <td>{schedule.busId.number}</td>
//               <td>{schedule.routeId.name}</td>
//               <td>{schedule.direction}</td>
//               <td>
//                 {schedule.stopTimes.map((time, index) => (
//                   <span key={index}>{time.stopName} </span>
//                 ))}
//               </td>
//               <td>
//                 <button onClick={() => startEditing(schedule)}>Edit</button>
//                 <button onClick={() => deleteSchedule(schedule._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ScheduleManagement;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ScheduleManagement.css'; // Assuming styles are stored here

const ScheduleManagement = () => {
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [selectedBus, setSelectedBus] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [stopTimes, setStopTimes] = useState([]);
  const [direction, setDirection] = useState('forward');
  const [editingScheduleId, setEditingScheduleId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch buses and routes on component mount
  useEffect(() => {
    fetchBuses();
    fetchRoutes();
    fetchSchedules();
  }, []);

  const fetchBuses = async () => {
    const response = await axios.get('http://localhost:3020/buses'); // Replace with your actual route
    setBuses(response.data);
    console.log(response.data)
  };

  const fetchRoutes = async () => {
    const response = await axios.get('http://localhost:3020/routes'); // Replace with your actual route
    setRoutes(response.data);
  };

  const fetchSchedules = async () => {
    try {
    const response = await axios.get('http://localhost:3020/schedules'); 
    console.log('Fetched schedules:', response.data);
    if (Array.isArray(response.data)) {
      setSchedules(response.data);
    } else {
      setError('Invalid data format received from the server.');
      setSchedules([]); 
    }
  } catch (err) {
    setError('Failed to fetch schedules: ' + err.message);
    setSchedules([]);
  } finally {
    setLoading(false);
  }// Replace with your actual route
    
  };

  const fetchStopsForRoute = async (routeId) => {
    try {
      const response = await axios.get(`http://localhost:3020/routes/${routeId}/stops`);
      const stops = response.data;

      // Populate stopTimes with stop names and empty arrival times
      const formattedStops = stops.map((stop) => ({
        stopName: stop.name,
        arrivalTime: '', // Empty time to be filled by the user
      }));
      setStopTimes(formattedStops);
    } catch (err) {
      setError('Failed to fetch stops: ' + err.message);
    }
  };

  const handleRouteChange = (routeId) => {
    setSelectedRoute(routeId);
    if (routeId) {
      fetchStopsForRoute(routeId);
    } else {
      setStopTimes([]); // Clear stop times if no route is selected
    }
  };

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);

    // Reverse stopTimes order if direction is "backward"
    if (newDirection === 'backward') {
      setStopTimes((prevStopTimes) => [...prevStopTimes].reverse());
    } else if (newDirection === 'forward') {
      // Fetch the original order of stops for the selected route
      if (selectedRoute) {
        fetchStopsForRoute(selectedRoute);
      }
    }
  };

  const addStopTime = () => {
    setStopTimes([...stopTimes, { stopName: '', arrivalTime: '' }]);
  };

  const updateStopTime = (index, field, value) => {
    const updatedStopTimes = [...stopTimes];
    updatedStopTimes[index][field] = value;
    setStopTimes(updatedStopTimes);
  };

  const removeStopTime = (index) => {
    const updatedStopTimes = stopTimes.filter((_, i) => i !== index);
    setStopTimes(updatedStopTimes);
  };

  const handleSave = async () => {
    const data = {
      busId: selectedBus,
      routeId: selectedRoute,
      stopTimes: stopTimes.map((stop) => ({
        stopName: stop.stopName,
        arrivalTime: new Date(stop.arrivalTime).toISOString(), // Convert to ISO format
      })),
      direction,
    };
    console.log('Data to be saved:', data);
    if (editingScheduleId) {
      await axios.put(`http://localhost:3020/schedules/update/${editingScheduleId}`, data);
    } else {
      await axios.post('http://localhost:3020/addSchedule', data);
    }
    setEditingScheduleId(null);
    setStopTimes([]);
    fetchSchedules();
  };

  const handleEdit = (schedule) => {
    setSelectedBus(schedule.busId._id);
    setSelectedRoute(schedule.routeId._id);
    setStopTimes(schedule.stopTimes);
    setDirection(schedule.direction);
    setEditingScheduleId(schedule._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3020/schedules/delete/${id}`);
    fetchSchedules();
  };

  return (
    <div className="schedule-management">
      <h2>Schedule Management</h2>

      <div className="form-group">
        <label>Bus</label>
        <select
          value={selectedBus}
          onChange={(e) => setSelectedBus(e.target.value)}
        >
          <option value="">Select a bus</option>
          {buses.map((bus) => (
            <option key={bus._id} value={bus._id}>
              {bus.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Route</label>
        <select
          value={selectedRoute}
          onChange={(e) => handleRouteChange(e.target.value)}
        >
          <option value="">Select a route</option>
          {routes.map((route) => (
            <option key={route._id} value={route._id}>
              {route.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Direction</label>
        <select
          value={direction}
          onChange={(e) =>  handleDirectionChange(e.target.value)}
        >
          <option value="forward">Forward</option>
          <option value="backward">Backward</option>
        </select>
      </div>

      <div className="stop-times">
        <h3>Stop Times</h3>
        {stopTimes.map((stop, index) => (
          <div key={index} className="stop-time-row">
            <input
              type="text"
              placeholder="Stop Name"
              value={stop.stopName}
              readOnly
              // onChange={(e) =>
              //   updateStopTime(index, 'stopName', e.target.value)
              // }
            />
            <input
              type="time"
              placeholder="Arrival Time"
              value={stop.arrivalTime}
              onChange={(e) =>
                updateStopTime(index, 'arrivalTime', e.target.value)
              }
            />
            <button onClick={() => removeStopTime(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addStopTime}>Add Stop Time</button>
      </div>

      <button onClick={handleSave}>
        {editingScheduleId ? 'Update Schedule' : 'Create Schedule'}
      </button>

      <h3>Existing Schedules</h3>
      <table>
        <thead>
          <tr>
            <th>Bus</th>
            <th>Route</th>
            <th>Direction</th>
            <th>Stop Times</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules?.map((schedule) => (
            <tr key={schedule._id}>
              <td>{schedule.busId?.name}</td>
              <td>{schedule.routeId?.name}</td>
              <td>{schedule.direction}</td>
              <td>
                {schedule.stopTimes?.map((stop,idx) => (
                  <div key={idx}>
                    {stop.stopName} - {new Date(stop.arrivalTime).toLocaleTimeString()}
                  </div>
                ))}
              </td>
              <td>
                <button onClick={() => handleEdit(schedule)}>Edit</button>
                <button onClick={() => handleDelete(schedule._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleManagement;
