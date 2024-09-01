// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx';
// import Dashboard from './components/Dashboard';
// import UserManagement from './components/UserManagement';
// import DrugManagement from './components/DrugManagement';
// import InventoryManagement from './components/InventoryManagement';
// import OrderManagement from './components/OrderManagement';
// import ShipmentTracking from './components/ShipmentTracking';
// import TransactionLogs from './components/TransactionLogs';
// import AlertsNotifications from './components/AlertNotification';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/users" element={<UserManagement />} />
//         <Route path="/drugs" element={<DrugManagement />} />
//         <Route path="/inventory" element={<InventoryManagement />} />
//         <Route path="/orders" element={<OrderManagement />} />
//         <Route path="/shipments" element={<ShipmentTracking />} />
//         <Route path="/transactions" element={<TransactionLogs />} />
//         <Route path="/alerts" element={<AlertsNotifications />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// src/App.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
// import DrugComponent from './components/DrugManagement.jsx';
// import InventoryComponent from './components/InventoryManagement.jsx';
// import OrderComponent from './components/OrderManagement.jsx';
// import ShipmentComponent from './components/ShipmentTracking.jsx';
// import TransactionComponent from './components/TransactionLogs.jsx';
// import AlertComponent from './components/AlertNotification.jsx';

// function App() {
//   // State management for fetched data
//   const [drugs, setDrugs] = useState([]);
//   const [inventory, setInventory] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [shipments, setShipments] = useState([]);
//   const [transactions, setTransactions] = useState([]);
//   const [alerts, setAlerts] = useState([]);

//   // Fetch data from the backend API
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // Fetch data from different endpoints
//       const drugsData = await axios.get('http://localhost:5173/api/drugs');
//       const inventoryData = await axios.get('http://localhost:5173/api/inventory');
//       const ordersData = await axios.get('http://localhost:5173/api/orders');
//       const shipmentsData = await axios.get('http://localhost:5173/api/shipments');
//       const transactionsData = await axios.get('http://localhost:5173/api/transactions');
//       const alertsData = await axios.get('http://localhost:5173/api/alerts');

//       // Update state with fetched data
//       setDrugs(drugsData.data);
//       setInventory(inventoryData.data);
//       setOrders(ordersData.data);
//       setShipments(shipmentsData.data);
//       setTransactions(transactionsData.data);
//       setAlerts(alertsData.data);
//     } catch (error) {
//       console.error('Error fetching data from backend:', error);
//     }
//   };

//   return (
//     <Router>
//       <Container>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" style={{ flexGrow: 1 }}>
//               Drug Inventory and Supply Chain Management
//             </Typography>
//             <Button color="inherit" href="/">Drugs</Button>
//             <Button color="inherit" href="/inventory">Inventory</Button>
//             <Button color="inherit" href="/orders">Orders</Button>
//             <Button color="inherit" href="/shipments">Shipments</Button>
//             <Button color="inherit" href="/transactions">Transactions</Button>
//             <Button color="inherit" href="/alerts">Alerts</Button>
//           </Toolbar>
//         </AppBar>

//         <Routes>
//           <Route path="/" element={<DrugComponent drugs={drugs} />} />
//           <Route path="/inventory" element={<InventoryComponent inventory={inventory} />} />
//           <Route path="/orders" element={<OrderComponent orders={orders} />} />
//           <Route path="/shipments" element={<ShipmentComponent shipments={shipments} />} />
//           <Route path="/transactions" element={<TransactionComponent transactions={transactions} />} />
//           <Route path="/alerts" element={<AlertComponent alerts={alerts} />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// }

// export default App;
// src/App.js

// src/App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Dashboard from './components/Dashboard.jsx';
import DrugComponent from './components/DrugManagement.jsx';
import InventoryComponent from './components/InventoryManagement.jsx';
import OrderComponent from './components/OrderManagement.jsx';
import ShipmentComponent from './components/ShipmentTracking.jsx';
import TransactionComponent from './components/TransactionLogs.jsx';
import AlertComponent from './components/AlertNotification.jsx';

// Import API client functions
import {
  fetchDrugs,
  fetchInventory,
  fetchOrders,
  fetchShipments,
  fetchTransactions,
  fetchAlerts,
} from './utils/api-client.js'

function App() {
  // State management for fetched data
  const [drugs, setDrugs] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [orders, setOrders] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Fetch data from the backend API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data using apiClient functions
      const drugsData = await fetchDrugs();
      const inventoryData = await fetchInventory();
      const ordersData = await fetchOrders();
      const shipmentsData = await fetchShipments();
      const transactionsData = await fetchTransactions();
      const alertsData = await fetchAlerts();

      // Update state with fetched data
      setDrugs(drugsData.data);
      setInventory(inventoryData.data);
      setOrders(ordersData.data);
      setShipments(shipmentsData.data);
      setTransactions(transactionsData.data);
      setAlerts(alertsData.data);
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };

  return (
    <Router>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Drug Inventory and Supply Chain Management
            </Typography>
            <Button color="inherit" href="/">Dashboard</Button>
            <Button color="inherit" href="/drugs">Drugs</Button>
            <Button color="inherit" href="/inventory">Inventory</Button>
            <Button color="inherit" href="/orders">Orders</Button>
            <Button color="inherit" href="/shipments">Shipments</Button>
            <Button color="inherit" href="/transactions">Transactions</Button>
            <Button color="inherit" href="/alerts">Alerts</Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Dashboard drugs={drugs} inventory={inventory} orders={orders} shipments={shipments} transactions={transactions} alerts={alerts} />} />
          <Route path="/drugs" element={<DrugComponent drugs={drugs} />} />
          <Route path="/inventory" element={<InventoryComponent inventory={inventory} />} />
          <Route path="/orders" element={<OrderComponent orders={orders} />} />
          <Route path="/shipments" element={<ShipmentComponent shipments={shipments} />} />
          <Route path="/transactions" element={<TransactionComponent transactions={transactions} />} />
          <Route path="/alerts" element={<AlertComponent alerts={alerts} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;