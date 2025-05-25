import React from "react";
import { useLocation } from "react-router-dom";
import "./Shop.css"; // Make sure this file exists

// ✅ Capitalized component name
const Shop = () => {
  const location = useLocation();

  return (
    <div className="shop-page">
      {/* Categories Section */}
      <div className="container-fluid mt-4 pt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card categories-card">
              <div className="card-header bg-primary text-white">
                <h5>Categories</h5>
              </div>
              <div className="list-group list-group-flush">
                {[
                  "Electronics",
                  "Fashion",
                  "Groceries",
                  "Home & Kitchen",
                  "Beauty",
                  "Toys",
                  "Books",
                  "Sports"
                ].map((category, i) => (
                  <button
                    key={i}
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  >
                    {category}
                    <span className="badge bg-primary rounded-pill">
                      {Math.floor(Math.random() * 50)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>Featured Products</h4>
              <div className="sort-dropdown">
                <select className="form-select form-select-sm">
                  <option>Sort by: Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                <div className="col" key={i}>
                  <div className="card product-card h-100">
                    <div className="badge bg-danger position-absolute m-2">
                      -{Math.floor(Math.random() * 50) + 10}%
                    </div>
                    <img
                      src={`https://picsum.photos/300/200?random=${i}`}
                      className="card-img-top"
                      alt={`Product ${i + 1}`}
                    />
                    <div className="card-body">
                      <h6 className="card-title">Product {i + 1}</h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-danger fw-bold">
                            ₹{Math.floor(Math.random() * 5000) + 500}
                          </span>
                          <span className="text-decoration-line-through text-muted small ms-2">
                            ₹{Math.floor(Math.random() * 8000) + 1000}
                          </span>
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

            {/* Pagination */}
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="container mt-5">
        <div className="card bg-light border-0">
          <div className="card-body p-4">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h4>Special Weekend Sale!</h4>
                <p className="mb-0">
                  Get extra 10% off on orders above ₹2000. Use code: FUSE10
                </p>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
