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


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ScheduleManagement.css";

const ScheduleManagement = () => {
  const [schedules, setSchedules] = useState([]);
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [busId, setBusId] = useState("");
  const [routeId, setRouteId] = useState("");
  const [stopTimes, setStopTimes] = useState([]);
  const [newStopTime, setNewStopTime] = useState("");
  const [editingSchedule, setEditingSchedule] = useState(null);

  // Fetch all schedules
  useEffect(() => {
    try{
    axios.get('http://localhost:3020/api/schedule/${busId}')
      .then((response) => setSchedules(response.data))}
      catch (error) {
              console.error('Error fetching schedule:', error);
            }
      
  }, []);

  // Fetch buses and routes
  useEffect(() => {
    const fetchBusesAndRoutes = async () => {
      try {
        const busResponse = await axios.get("http://localhost:3020/buses");
        const routeResponse = await axios.get("http://localhost:3020/routes");
        setBuses(busResponse.data);
        setRoutes(routeResponse.data);
      } catch (error) {
        console.error("Error fetching buses or routes:", error);
      }
    };
    fetchBusesAndRoutes();
  }, []);

  // Add a new schedule
  const addSchedule = async () => {
    if (!busId || !routeId || stopTimes.length === 0) {
      alert("Please provide all fields");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3020/addSchedule", {
        busId,
        routeId,
        stopTimes,
      });
      setSchedules((prev) => [...prev, response.data]);
      resetForm();
    } catch (error) {
      console.error("Error adding schedule:", error);
    }
  };

  // Update a schedule
  const updateSchedule = async () => {
    if (!editingSchedule || !busId || !routeId || stopTimes.length === 0) {
      alert("Please provide all fields");
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:3020/schedules/update/${editingSchedule._id}`,
        {
          busId,
          routeId,
          stopTimes,
        }
      );
      setSchedules((prev) =>
        prev.map((schedule) =>
          schedule._id === editingSchedule._id ? response.data : schedule
        )
      );
      resetForm();
    } catch (error) {
      console.error("Error updating schedule:", error);
    }
  };

  // Delete a schedule
  const deleteSchedule = async (id) => {
    try {
      await axios.delete(`http://localhost:3020/schedules/delete/${id}`);
      setSchedules((prev) => prev.filter((schedule) => schedule._id !== id));
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  };

  // Add a stop time
  const addStopTime = () => {
    if (newStopTime) {
      setStopTimes((prev) => [...prev, newStopTime]);
      setNewStopTime("");
    }
  };

  // Remove a stop time
  const removeStopTime = (index) => {
    setStopTimes((prev) => prev.filter((_, i) => i !== index));
  };

  // Start editing a schedule
  const startEditing = (schedule) => {
    setEditingSchedule(schedule);
    setBusId(schedule.busId);
    setRouteId(schedule.routeId);
    setStopTimes(schedule.stopTimes);
  };

  const resetForm = () => {
    setEditingSchedule(null);
    setBusId("");
    setRouteId("");
    setStopTimes([]);
    setNewStopTime("");
  };

  return (
    <div className="schedule-management">
      <h2>Schedule Management</h2>

      {/* Add or Edit Schedule */}
      <div className="form">
        <select
          value={busId}
          onChange={(e) => setBusId(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Bus
          </option>
          {buses.map((bus) => (
            <option key={bus._id} value={bus._id}>
              {bus.number} - {bus.name}
            </option>
          ))}
        </select>

        <select
          value={routeId}
          onChange={(e) => setRouteId(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Route
          </option>
          {routes.map((route) => (
            <option key={route._id} value={route._id}>
              {route.name}
            </option>
          ))}
        </select>

        <div>
          <input
            type="text"
            placeholder="Add Stop Time"
            value={newStopTime}
            onChange={(e) => setNewStopTime(e.target.value)}
          />
          <button onClick={addStopTime}>Add Stop Time</button>
        </div>
        <ul>
          {stopTimes.map((time, index) => (
            <li key={index}>
              {time}{" "}
              <button onClick={() => removeStopTime(index)}>Remove</button>
            </li>
          ))}
        </ul>
        {editingSchedule ? (
          <button onClick={updateSchedule}>Update Schedule</button>
        ) : (
          <button onClick={addSchedule}>Add Schedule</button>
        )}
      </div>

      {/* List of Schedules */}
      <table>
        <thead>
          <tr>
            <th>Bus Number</th>
            <th>Route Name</th>
            <th>Stop Times</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule._id}>
              <td>
                {buses.find((bus) => bus._id === schedule.busId)?.number || "N/A"}
              </td>
              <td>
                {routes.find((route) => route._id === schedule.routeId)?.name ||
                  "N/A"}
              </td>
              <td>
                {schedule.stopTimes.map((time, index) => (
                  <span key={index}>{time} </span>
                ))}
              </td>
              <td>
                <button onClick={() => startEditing(schedule)}>Edit</button>
                <button onClick={() => deleteSchedule(schedule._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleManagement;