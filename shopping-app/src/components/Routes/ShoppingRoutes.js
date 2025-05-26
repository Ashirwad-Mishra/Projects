// components/Routes/ShoppingRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from '../Shop/Shop';
import AddProduct from '../AddProducts/AddProducts';
import ProductDetail from '../ProductDetails/ProductDetail';

export default function ShoppingRoutes() {
  return (
    <Routes>
      <Route path="shop" element={<Shop />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="product/:id" element={<ProductDetail />} />
      {/* Other shopping routes */}
    </Routes>
  );
}
