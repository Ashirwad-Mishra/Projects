import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import ShoppingRoutes from './components/Routes/ShoppingRoutes';
// import PaymentRoutes from './routes/PaymentRoutes';
// import BookingRoutes from './routes/BookingRoutes';
// import BankingRoutes from './routes/BankingRoutes';

const NotFound = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>404 - Page Not Found</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Shopping Module */}
        <Route path="/*" element={<ShoppingRoutes />} />

        {/* You can add more domain modules here */}
        {/* <Route path="/payments/*" element={<PaymentRoutes />} /> */}
        {/* <Route path="/booking/*" element={<BookingRoutes />} /> */}
        {/* <Route path="/banking/*" element={<BankingRoutes />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
