

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const ShipmentComponent = () => {
  const [shipments, setShipments] = useState([]);
  const [newShipment, setNewShipment] = useState({ orderId: '', status: '' });

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/shipments');
      setShipments(response.data);
    } catch (error) {
      console.error('Error fetching shipments:', error);
    }
  };

  const handleAddShipment = async () => {
    try {
      await axios.post('http://localhost:5173/api/shipments', newShipment);
      fetchShipments();
      setNewShipment({ orderId: '', status: '' });
    } catch (error) {
      console.error('Error adding shipment:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shipments
      </Typography>
      <TextField
        label="Order ID"
        value={newShipment.orderId}
        onChange={(e) => setNewShipment({ ...newShipment, orderId: e.target.value })}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Status"
        value={newShipment.status}
        onChange={(e) => setNewShipment({ ...newShipment, status: e.target.value })}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddShipment}>
        Add Shipment
      </Button>
      <List>
        {shipments.map((shipment) => (
          <ListItem key={shipment._id}>
            <ListItemText primary={`Order ID: ${shipment.orderId}, Status: ${shipment.status}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ShipmentComponent;