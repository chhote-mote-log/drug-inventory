

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const InventoryComponent = () => {
  const [inventories, setInventories] = useState([]);
  const [newInventory, setNewInventory] = useState({ drugId: '', quantity: 0 });

  useEffect(() => {
    fetchInventories();
  }, []);

  const fetchInventories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/inventories');
      setInventories(response.data);
    } catch (error) {
      console.error('Error fetching inventories:', error);
    }
  };

  const handleAddInventory = async () => {
    try {
      await axios.post('http://localhost:5173/api/inventories', newInventory);
      fetchInventories();
      setNewInventory({ drugId: '', quantity: 0 });
    } catch (error) {
      console.error('Error adding inventory:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Inventories
      </Typography>
      <TextField
        label="Drug ID"
        value={newInventory.drugId}
        onChange={(e) => setNewInventory({ ...newInventory, drugId: e.target.value })}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Quantity"
        type="number"
        value={newInventory.quantity}
        onChange={(e) => setNewInventory({ ...newInventory, quantity: parseInt(e.target.value) })}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddInventory}>
        Add Inventory
      </Button>
      <List>
        {inventories.map((inventory) => (
          <ListItem key={inventory._id}>
            <ListItemText primary={`Drug ID: ${inventory.drugId}, Quantity: ${inventory.quantity}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default InventoryComponent;