import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Electronics'
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create product object with image URL (we'll handle this differently)
    const newProduct = {
      ...product,
      id: Date.now(), // Simple unique ID
      price: parseFloat(product.price),
      image: image ? URL.createObjectURL(image) : '/placeholder.jpg'
    };

    // Save to local JSON file (simulated)
    const existingProducts = JSON.parse(localStorage.getItem('products') || []);
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    
    alert('Product added successfully!');
    navigate('/shop');
  };

  return (
    <div className="container mt-5 pt-4">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={product.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input 
            type="number" 
            className="form-control" 
            value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value})}
            min="0"
            step="0.01"
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea 
            className="form-control" 
            rows="3"
            value={product.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
          ></textarea>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select 
            className="form-select"
            value={product.category}
            onChange={(e) => setProduct({...product, category: e.target.value})}
          >
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
            <option value="Beauty">Beauty</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input 
            type="file" 
            className="form-control"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;