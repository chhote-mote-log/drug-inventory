// src/components/AlertsNotifications.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AlertsNotifications = () => {
  return (
    <div style={{ padding: 20 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Filter by Type</InputLabel>
        <Select defaultValue="">
          <MenuItem value="Low Stock">Low Stock</MenuItem>
          <MenuItem value="Expired Drug">Expired Drug</MenuItem>
          <MenuItem value="Delayed Shipment">Delayed Shipment</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          type="date"
          label="Filter by Date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Alert Type</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example data, replace with dynamic content */}
            <TableRow>
              <TableCell>Low Stock</TableCell>
              <TableCell>Drug A is below minimum stock level</TableCell>
              <TableCell>2024-08-01</TableCell>
              <TableCell>
                <Button variant="outlined">Acknowledge</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Expired Drug</TableCell>
              <TableCell>Drug B has expired</TableCell>
              <TableCell>2024-07-31</TableCell>
              <TableCell>
                <Button variant="outlined">Remove</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AlertsNotifications;