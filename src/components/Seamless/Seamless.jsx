import React from "react";
import "./seamless.css";
import imgUrl from "../assets/seamless.png";
import Quantstamp from "../assets/quantstamp.svg";
import solidqroup from "../assets/solidqroup.svg";

const Seamless = () => {
  return (
    <div className="seamless">
      <div className="seamless-block">
        <div className="seamless-content">
          <div className="seamless-title">
            Complex tech.
            <br />
            Seamless experience.
          </div>
          <div className="seamless-text">
            Imagine being able to offer and manage co-ownership over anything
            via one fast, lean shared wallet. That’s exactly what we’ve built.
            We utilize our blockchain solution to facilitate ownership and
            securely verify it. All while providing a slick user experince,
            completely designed for mainstream adoption.
          </div>
          <div className="seamless-button">
            <button>Learn more</button>
          </div>
        </div>
        <div className="seamless-img">
          <div className="antic-seamless">antic</div>
          <img className="seamless-img1" src={imgUrl}></img>
        </div>
      </div>

      <div className="trust-block">
        <div className="trust-img">
          <div className="img-block">
            <img className="trust-img1" src={Quantstamp}></img>
          </div>
          <div className="img-block">
            <img className="trust-img2" src={solidqroup}></img>
          </div>
          <p>*Receipt of a clean security report is pending</p>
        </div>
        <div className="trust-content">
          <div className="trust-title">Trust in antic</div>
          <div className="trust-text">
            At antic, we believe that trust and security are fundamental.
            <br /> From day one, we have followed strict regulatory and <br />
            compliance standards across our business practices. We
            <br /> have partnered with leading auditing companies to <br />{" "}
            conduct smart contract, off-chain, networking, and front -<br />
            end audits to enhance the security of our solutions.
          </div>
          <div className="trust-button">
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seamless;
