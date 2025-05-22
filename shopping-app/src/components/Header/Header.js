// components/Header.js
import { Link } from "react-router-dom";
import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";

export default function Header() 
{
  return (
    <header className="header">
      <Link to="/" className="logo">ShopApp</Link>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button><FiSearch /></button>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart"><FiShoppingCart /></Link>
        <Link to="/account"><FiUser /></Link>
      </nav>
    </header>
  );
}