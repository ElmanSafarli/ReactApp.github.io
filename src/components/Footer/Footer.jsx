import React from "react";
import "./footer.css";
import logo from "../assets/logo-nav.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="antic-logo">
          <img className="logo-img" src={logo} alt="logo-img"></img>
          <p>antic</p>
        </div>
        <div className="footer-items">
          <ul>
            <li>Terms & Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-btn">
          <button>Go to app</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
