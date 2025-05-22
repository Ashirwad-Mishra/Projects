// components/ProductsPage.js
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";

const ProductsPage = () => {
  const products = [
    // { id: 1, name: "Product 1", price: 19.99, image: "" },
    // { id: 2, name: "Product 2", price: 24.99, image: "" },
    // { id: 3, name: "Product 3", price: 15.99, image: "product3.jpg" },
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