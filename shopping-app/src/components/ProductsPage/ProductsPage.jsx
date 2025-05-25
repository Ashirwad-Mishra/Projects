// components/ProductsPage.js
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import "./ProductsPage.css"; 
const ProductsPage = () => {
  const products = [
    {
      "id": 1,
      "name": "Cup",
      "price": "₹450",
      "image": "images/cup.jpeg"
    }
,
    { id: 2, name: "Product 2", price: 24.99, image: "" },
    { id: 3, name: "Product 3", price: 15.99, image: "product3.jpg" },
    // // Add more dummy data
  ];

  return (
    <div className="products-page">
      <Header />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;