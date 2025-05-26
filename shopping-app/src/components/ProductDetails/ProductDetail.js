// components/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const mockProducts = Array(8)
      .fill()
      .map((_, i) => ({
        id: `mock-${i}`,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 5000) + 500,
        image: `https://picsum.photos/300/200?random=${i}`,
        description: `Sample product ${i + 1}`,
        category: ["Electronics", "Fashion", "Home"][i % 3],
        date: Date.now() - i * 1000000,
      }));

    const allProducts = [...savedProducts, ...mockProducts];
    const foundProduct = allProducts.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="container mt-5 pt-4">
        <h3>Product not found</h3>
        <button onClick={() => navigate("/shop")} className="btn btn-secondary mt-3">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded border"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">Category: {product.category}</p>
          <p>{product.description}</p>
          <h4 className="text-danger">₹{product.price}</h4>
          <button className="btn btn-primary mt-3">
            <i className="fas fa-cart-plus me-2"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
