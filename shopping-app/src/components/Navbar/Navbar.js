import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="./Fuse.png"
            height="30"
            alt="Fuse Logo"
            loading="lazy"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              { label: "Home", icon: "fa-home" },
              { label: "Shop", icon: "fa-shopping-cart" },
              { label: "UPI & Wallet", icon: "fa-wallet" },
              { label: "Entertainment", icon: "fa-tv" },
              { label: "Orders", icon: "fa-box" },
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <a className={`nav-link ${i === 0 ? "active" : ""}`} href="#">
                  <i className={`fas ${item.icon} me-1`}></i> {item.label}
                </a>
              </li>
            ))}
          </ul>

          <form className="d-flex input-group w-auto me-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search products, shows, or UPI IDs"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="button">
              Search
            </button>
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* Notifications */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="notificationsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end p-1"
                aria-labelledby="notificationsDropdown"
              >
                {["Sale Alert!", "Cashback Received", "New Show Released"].map((msg, i) => (
                  <React.Fragment key={i}>
                    <li className="px-2 py-1">
                      <i className="fas fa-info-circle me-2 text-primary"></i> {msg}
                    </li>
                    {i !== 2 && <li><hr className="dropdown-divider" /></li>}
                  </React.Fragment>
                ))}
              </ul>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                  className="rounded-circle img-fluid"
                  height="25"
                  width="25"
                  alt="Profile"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end p-1" aria-labelledby="profileDropdown">
                <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>My Profile</a></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-wallet me-2"></i>Wallet</a></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i>Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt me-2"></i>Log Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;