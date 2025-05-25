import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import Navbar from "./components/Navbar/Navbar";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      {
        <Home/>
      }
    </div>
  );
}

export default App;