// src/components/UserManagement.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const UserManagement = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Example data, replace with dynamic content */}
          <TableRow>
            <TableCell>JohnDoe</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>john@domain.com</TableCell>
            <TableCell>Active</TableCell>
            <TableCell><Button variant="outlined">Edit</Button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>JaneDoe</TableCell>
            <TableCell>Supplier</TableCell>
            <TableCell>jane@domain.com</TableCell>
            <TableCell>Inactive</TableCell>
            <TableCell><Button variant="outlined">Edit</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserManagement;