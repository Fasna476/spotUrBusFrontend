import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BusManagement.css'; // Add your CSS styles here

const BusManagement = () => {
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [form, setForm] = useState({
    name: '',
    type: '',
    number: '',
    routeId: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch buses and routes on load
  useEffect(() => {
    fetchBuses();
    fetchRoutes();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://localhost:3020/buses');
      setBuses(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };

  const fetchRoutes = async () => {
    try {
      const response = await axios.get('http://localhost:3020/routes');
      setRoutes(response.data);
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddBus = async () => {
    try {
      const response = await axios.post('http://localhost:3020/addBus', form);
      setBuses([...buses, response.data]);
      setForm({ name: '', type: '', number: '', routeId: '' });
    } catch (error) {
      console.error('Error adding bus:', error);
    }
  };

  const handleEditBus = (bus) => {
    setIsEditing(true);
    setEditId(bus._id);
    setForm({
      name: bus.name,
      type: bus.type,
      number: bus.number,
      routeId: bus.routeId
    });
  };

  const handleUpdateBus = async () => {
    try {
      const response = await axios.put(`http://localhost:3020/buses/update/${editId}`, form);
      setBuses(buses.map((bus) => (bus._id === editId ? response.data : bus)));
      setIsEditing(false);
      setForm({ name: '', type: '', number: '', routeId: '' });
      setEditId(null);
    } catch (error) {
      console.error('Error updating bus:', error);
    }
  };

  const handleDeleteBus = async (id) => {
    try {
      await axios.delete(`http://localhost:3020/buses/delete/${id}`);
      setBuses(buses.filter((bus) => bus._id !== id));
    } catch (error) {
      console.error('Error deleting bus:', error);
    }
  };

  return (
    <div className="bus-management">
      <h2>Bus Management</h2>
      <div className="form-container">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Bus Name"
        />
        <input
          type="text"
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Bus Type"
        />
        <input
          type="text"
          name="number"
          value={form.number}
          onChange={handleChange}
          placeholder="Bus Number"
        />
        <select
          name="routeId"
          value={form.routeId}
          onChange={handleChange}
        >
          <option value="">Select Route</option>
          {routes.map((route) => (
            <option key={route._id} value={route._id}>
              {route.name}
            </option>
          ))}
        </select>
        {isEditing ? (
          <button onClick={handleUpdateBus}>Update Bus</button>
        ) : (
          <button onClick={handleAddBus}>Add Bus</button>
        )}
      </div>
      <div className="bus-list">
        <h3>Existing Buses</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Number</th>
              <th>Route</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus._id}>
                <td>{bus.name}</td>
                <td>{bus.type}</td>
                <td>{bus.number}</td>
                <td>{routes.find((route) => route._id === bus.routeId)?.name || 'N/A'}</td>
                <td>
                  <button onClick={() => handleEditBus(bus)}>Edit</button>
                  <button onClick={() => handleDeleteBus(bus._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusManagement;
