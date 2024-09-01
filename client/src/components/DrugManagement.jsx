

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const DrugComponent = () => {
  const [drugs, setDrugs] = useState([]);
  const [newDrug, setNewDrug] = useState({ name: '', description: '' });


  const fetchDrugs = async () => {
    try {
      const response = await axios.get('http://localhost:5173/api/drugs');
      setDrugs(response.data);
    } catch (error) {
      console.error('Error fetching drugs:', error);
    }
  };

  const handleAddDrug = async () => {
    try {
      await axios.post('http://localhost:5173/api/drugs', newDrug);
      fetchDrugs();
      setNewDrug({ name: '', description: '' });
    } catch (error) {
      console.error('Error adding drug:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Drugs
      </Typography>
      <TextField
        label="Name"
        value={newDrug.name}
        onChange={(e) => setNewDrug({ ...newDrug, name: e.target.value })}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Description"
        value={newDrug.description}
        onChange={(e) => setNewDrug({ ...newDrug, description: e.target.value })}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddDrug}>
        Add Drug
      </Button>
      <List>
        {drugs.map((drug) => (
          <ListItem key={drug._id}>
            <ListItemText primary={`${drug.name}: ${drug.description}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default DrugComponent;