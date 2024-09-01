
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const TransactionComponent = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ orderId: '', amount: 0 });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleAddTransaction = async () => {
    try {
      await axios.post('http://localhost:5173/api/transactions', newTransaction);
      fetchTransactions();
      setNewTransaction({ orderId: '', amount: 0 });
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Transactions
      </Typography>
      <TextField
        label="Order ID"
        value={newTransaction.orderId}
        onChange={(e) => setNewTransaction({ ...newTransaction, orderId: e.target.value })}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Amount"
        type="number"
        value={newTransaction.amount}
        onChange={(e) => setNewTransaction({ ...newTransaction, amount: parseFloat(e.target.value) })}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddTransaction}>
        Add Transaction
      </Button>
      <List>
        {transactions.map((transaction) => (
          <ListItem key={transaction._id}>
            <ListItemText primary={`Order ID: ${transaction.orderId}, Amount: ${transaction.amount}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TransactionComponent;