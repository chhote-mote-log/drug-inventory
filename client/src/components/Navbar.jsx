// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Drug Inventory System
        </Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/users">Users</Button>
        <Button color="inherit" component={Link} to="/drugs">Drugs</Button>
        <Button color="inherit" component={Link} to="/inventory">Inventory</Button>
        <Button color="inherit" component={Link} to="/orders">Orders</Button>
        <Button color="inherit" component={Link} to="/shipments">Shipments</Button>
        <Button color="inherit" component={Link} to="/transactions">Transactions</Button>
        <Button color="inherit" component={Link} to="/alerts">Alerts</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;