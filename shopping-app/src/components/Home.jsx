import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="container-fluid mt-5 pt-4">
        <div className="row g-3">
          {/* Quick Access Toolbar */}
          <div className="col-12">
            <div className="card quick-access">
              <div className="row g-0 text-center">
                {['Send Money', 'Recharge', 'Book Ride', 'Order Food'].map((item, i) => (
                  <div className="col-3" key={i}>
                    <button className="btn btn-light w-100 py-3">
                      <i className={`fas fa-${['wallet', 'mobile-alt', 'car', 'utensils'][i]} fa-lg mb-2 text-primary`}></i>
                      <div className="small">{item}</div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Promotions Carousel */}
          <div className="col-12">
            <div id="promoCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner rounded-3">
                {[1, 2, 3].map((_, i) => (
                  <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                    <img src={`https://picsum.photos/1200/300?random=${i}`} 
                         className="d-block w-100" alt="Promotion" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mt-4">
        <h5 className="mb-3">Services</h5>
        <div className="row g-3">
          {['Online Shopping', 'UPI Payments', 'TV Shows', 'Wallet', 'Orders', 'Travel', 'Pay Bills', 'Movie Tickets'].map(
            (service, i) => (
              <div className="col-3" key={i}>
                <div className="card service-card h-100">
                  <div className="card-body text-center">
                    <i className={`fas fa-${['shopping-bag', 'qrcode', 'tv', 'wallet', 'box', 'plane', 'file-invoice', 'ticket-alt'][i]} fa-2x text-primary`}></i>
                    <div className="small mt-2">{service}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Cashback & Rewards */}
      <div className="container mt-4">
        <div className="card bg-primary text-white">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5>Available Cashback</h5>
              <h2>₹1,250</h2>
              <button className="btn btn-light btn-sm">Redeem Now</button>
            </div>
            <i className="fas fa-gift fa-4x opacity-50"></i>
          </div>
        </div>
      </div>

      {/* Featured Entertainment */}
      <div className="container mt-4">
        <h5 className="mb-3">Featured Shows</h5>
        <div className="row g-3 overflow-auto flex-nowrap">
          {[1,2,3,4].map((_,i) => (
            <div className="col-8 col-md-4" key={i}>
              <div className="card">
                <img src={`https://picsum.photos/400/200?random=${i}`} 
                     className="card-img-top" alt="Show" />
                <div className="card-body">
                  <h6>Show Title {i+1}</h6>
                  <div className="small text-muted">Drama • New Episode</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="container mt-4 mb-5">
        <h5 className="mb-3">Recent Orders</h5>
        <div className="list-group">
          {['Smartphone Ordered', 'Electricity Bill Paid', 'Movie Ticket Booked'].map((item,i) => (
            <div className="list-group-item d-flex justify-content-between align-items-center" key={i}>
              <div>
                <i className={`fas fa-${['box', 'bolt', 'ticket-alt'][i]} text-primary me-2`}></i>
                {item}
              </div>
              <span className="badge bg-light text-dark">{['In Transit', 'Completed', 'Upcoming'][i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* App Footer */}
      <footer className="bg-light py-4">
        <div className="container">
          <div className="row g-3 text-center">
            {['Fast Delivery', 'Secure Payments', '24/7 Support'].map((item,i) => (
              <div className="col-md-4" key={i}>
                <i className={`fas fa-${['shipping-fast', 'shield-alt', 'headset'][i]} fa-2x text-primary mb-2`}></i>
                <h6>{item}</h6>
                <div className="small text-muted">Lorem ipsum dolor sit amet</div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;