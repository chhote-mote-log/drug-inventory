
import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';

function Dashboard({ drugs, inventory, orders, shipments, transactions, alerts }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Total Drugs: {drugs.length}</Typography>
          <Button variant="contained" color="primary" href="/">View Drugs</Button>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Total Inventory Items: {inventory.length}</Typography>
          <Button variant="contained" color="primary" href="/inventory">View Inventory</Button>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Total Orders: {orders.length}</Typography>
          <Button variant="contained" color="primary" href="/orders">View Orders</Button>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Total Shipments: {shipments.length}</Typography>
          <Button variant="contained" color="primary" href="/shipments">View Shipments</Button>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Total Transactions: {transactions.length}</Typography>
          <Button variant="contained" color="primary" href="/transactions">View Transactions</Button>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Alerts: {alerts.length}</Typography>
          <Button variant="contained" color="primary" href="/alerts">View Alerts</Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;