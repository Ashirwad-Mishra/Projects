import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Electronics'
  });
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let base64Image = '/placeholder.jpg'; // fallback
    if (imageFile) {
      try {
        base64Image = await convertToBase64(imageFile);
      } catch (err) {
        console.error("Image conversion failed:", err);
      }
    }

    const newProduct = {
      ...product,
      id: `user-${Date.now()}`,
      price: parseFloat(product.price),
      image: base64Image,
      date: Date.now()
    };

    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
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
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
