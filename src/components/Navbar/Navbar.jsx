import React from "react";
import "./navbar.css";
import logo from "../assets/logo-nav.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side-navbar">
        <div className="antic-logo">
          <img className="logo-img" src={logo} alt="logo-img"></img>
          <p>antic</p>
        </div>

        <div className="nav-items">
          <div className="dropdown-list-products">
            <div class="dropdown">
              <span>Products</span>
              <div class="dropdown-content">
                <p>Antic Groups</p>
                <p>Antic Gates</p>
              </div>
            </div>
          </div>
          <ul>
            <li>Technology</li>
            <li>Blog</li>
            <li>Company</li>
            <li>Developers</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="nav-btn">
        <button>Go to app</button>
      </div>
    </div>
  );
};

export default Navbar;
