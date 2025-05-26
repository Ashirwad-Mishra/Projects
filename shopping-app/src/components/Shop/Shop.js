import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Shop.css";

const currentUser = JSON.parse(localStorage.getItem("user"));
const isOwner = currentUser?.email === "ashirwadmishra10@email.com";

const Shop = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("Popular");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const isMockProduct = (product) =>
    typeof product.id === "string" && product.id.includes("mock");

  useEffect(() => {
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  const combinedProducts = [
    ...products,
    ...Array(8)
      .fill()
      .map((_, i) => ({
        id: `mock-${i}`,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 5000) + 500,
        image: `https://picsum.photos/300/200?random=${i}`,
        description: `Sample product ${i + 1}`,
        category: ["Electronics", "Fashion", "Home"][i % 3],
        date: Date.now() - i * 1000000,
      })),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? combinedProducts
      : combinedProducts.filter(
          (product) => product.category === selectedCategory
        );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Price: Low to High") return a.price - b.price;
    if (sortOption === "Price: High to Low") return b.price - a.price;
    if (sortOption === "Newest First") return (b.date || 0) - (a.date || 0);
    return 0;
  });
useEffect(() => {
  if (!localStorage.getItem("user")) {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "ashirwadmishra10@email.com", name: "Ashirwad Mishra" })
    );
  }
}, []);

  return (
    <div className="shop-page">
      <div className="container-fluid mt-4 pt-5">
        <div className="row">
          {/* ✅ Category Sidebar */}
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Categories
              </div>
              <ul className="list-group list-group-flush">
                {["All", "Electronics", "Fashion", "Home", "Beauty"].map(
                  (cat) => (
                    <li
                      key={cat}
                      className={`list-group-item ${
                        selectedCategory === cat ? "active" : ""
                      }`}
                      onClick={() => setSelectedCategory(cat)}
                      style={{ cursor: "pointer" }}
                    >
                      {cat}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* ✅ Product Grid with Sort */}
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>Featured Products</h4>
              <div className="d-flex align-items-center gap-2">
                {isOwner && (
                  <Link to="/add-product" className="btn btn-success me-2">
                    <i className="fas fa-plus me-1"></i> Add Product
                  </Link>
                )}
                <label className="form-label me-2 mb-0">Sort by:</label>
                <select
                  className="form-select form-select-sm"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option>Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
              {sortedProducts.map((product) => (
                <div className="col" key={product.id}>
                  <div className="card product-card h-100">
                    {isMockProduct(product) && (
                      <div className="badge bg-danger position-absolute m-2">
                        -{Math.floor(Math.random() * 50) + 10}%
                      </div>
                    )}
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = "/placeholder.jpg";
                      }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{product.name}</h6>
                      <p className="card-text small">{product.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-danger fw-bold">
                            ₹{product.price}
                          </span>
                          {isMockProduct(product) && (
                            <span className="text-decoration-line-through text-muted small ms-2">
                              ₹{Math.floor(product.price * 1.5)}
                            </span>
                          )}
                        </div>
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="fas fa-cart-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional: Pagination */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
