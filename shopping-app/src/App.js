import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Shop from './components/Shop/Shop';
// import UpiWallet from './UpiWallet';
// import Entertainment from './Entertainment';
// import Orders from './Orders';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/upi-wallet" element={<UpiWallet />} /> */}
        {/* <Route path="/entertainment" element={<Entertainment />} /> */}
        {/* <Route path="/orders" element={<Orders />} /> */}
        {/* <Route path="/profile" element={<div>Profile Page</div>} /> */}
        {/* <Route path="/wallet" element={<div>Wallet Page</div>} /> */}
        {/* <Route path="/settings" element={<div>Settings Page</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;