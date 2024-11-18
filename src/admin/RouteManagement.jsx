import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RouteManagement.css'; // Add a CSS file for styling

const RouteManagement = () => {
  const [routes, setRoutes] = useState([]);
  const [form, setForm] = useState({ name: '', startLocation: '', endLocation: '', stops: [] });
  const [editingRouteId, setEditingRouteId] = useState(null);
  const [stopName, setStopName] = useState('');
 
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null)

  // Fetch all routes
  const fetchRoutes = async () => {
    try {
      const response = await axios.get('http://localhost:3020/routes');
      console.log(response.data)
      if (Array.isArray(response.data)) {
      setRoutes(response.data);}
      else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error fetching routes:', error);
      setError('Failed to fetch routes. Please try again later.');
    }
    finally {
        setLoading(false); // Stop loading
      }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);
  if (loading) {
    return <div>Loading routes...</div>; // Loading message
  }

  if (error) {
    return <div>{error}</div>; // Error message
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add a stop to the form
  const addStop = () => {
    if (stopName ) {
      setForm((prev) => ({
        ...prev,
        stops: [...prev.stops, { name: stopName }],
      }));
      setStopName('');
     
    }
  };

  // Handle route submission (add or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingRouteId) {
        // Update route
        await axios.put(`http://localhost:3020/routes/update/${editingRouteId}`, form);
      } else {
        // Add route
        await axios.post('http://localhost:3020/addRoute', form);
      }
      setForm({ name: '', startLocation: '', endLocation: '', stops: [] });
      setEditingRouteId(null);
      fetchRoutes();
    } catch (error) {
      console.error('Error submitting route:', error);
    }
  };

  // Delete a route
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3020/routes/delete/${id}`);
      fetchRoutes();
    } catch (error) {
      console.error('Error deleting route:', error);
    }
  };

  // Start editing a route
  const handleEdit = (route) => {
    setEditingRouteId(route._id);
    setForm({
      name: route.name,
      startLocation: route.startLocation,
      endLocation: route.endLocation,
      stops: route.stops,
    });
  };

  return (
    <div className="route-management">
      <h1>Route Management</h1>
      <form onSubmit={handleSubmit} className="route-form">
        <input
          type="text"
          name="name"
          placeholder="Route Name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="startLocation"
          placeholder="Start Location"
          value={form.startLocation}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="endLocation"
          placeholder="End Location"
          value={form.endLocation}
          onChange={handleInputChange}
          required
        />
        <div className="stops-section">
          <h3>Add Stops</h3>
          <div className="stop-inputs">
            <input
              type="text"
              placeholder="Stop Name"
              value={stopName}
              onChange={(e) => setStopName(e.target.value)}
            />
          
            <button type="button" onClick={addStop}>
              Add Stop
            </button>
          </div>
          <ul>
            {form.stops.map((stop, index) => (
              <li key={index}>
                {stop.name}
              </li>
            ))}
          </ul>
        </div>
        <button type="submit" className="btn-submit">
          {editingRouteId ? 'Update Route' : 'Add Route'}
        </button>
      </form>
      <div className="route-list">
        <h2>Existing Routes</h2>
        {routes.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Start</th>
                <th>End</th>
                <th>Stops</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route._id}>
                  <td>{route.name}</td>
                  <td>{route.startLocation}</td>
                  <td>{route.endLocation}</td>
                  <td>
                    <ul>
                      {route.stops.map((stop, index) => (
                        <li key={index}>
                          {stop.name} 
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(route)} className="btn-edit">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(route._id)} className="btn-delete">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No routes available.</p>
        )}
      </div>
    </div>
  );
};

export default RouteManagement;
