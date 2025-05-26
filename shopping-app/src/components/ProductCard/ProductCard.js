// components/ProductCard.js
import AddProduct from '../AddProducts/AddProducts';
import './ProductCard.css'
import '/components/AddProduct/AddProduct'
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
      <AddProduct product={product} />
    </div>
  );
}