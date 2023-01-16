import React from "react";
import "./buy.css";
import img1 from "../assets/buy-2.1.png";
import img2 from "../assets/buy-2.2.png";
import img3 from "../assets/buy-3.1.png";
import img4 from "../assets/buy-3.2.png";
import img5 from "../assets/buy-3.3.png";

const Buy = () => {
  return (
    <div className="buy">
      <div className="buy-content">
        <div className="first-buy-block">
          <h1>
            We made <br />
            co-ownership simple.
          </h1>
          <div className="buy-together">
            <div className="move-buy-block">Buy together</div>
          </div>
        </div>

        <div className="second-buy-block">
          <div className="second-buy-content">
            <div className="second-buy-title">
              Add co-ownership <br />
              to anything.
            </div>
            <div className="second-buy-text">
              Make any of your assets available to be bought collectively, boost
              on platform interaction and unlock new revenue streams. Simply add
              antic to your checkout experience and allow your consumers to buy,
              own and <span>benefit</span> together.
            </div>
            <div className="second-buy-button">
              <button>Learn more</button>
            </div>
          </div>
          <div className="second-buy-img">
            <img className="buy-img1" src={img1}></img>
            <img className="buy-img2" src={img2}></img>
          </div>
        </div>

        <div className="third-buy-block">
          <div className="third-buy-img">
            <img className="buy-img3" src={img3}></img>
            <img className="buy-img4" src={img4}></img>
            <img className="buy-img5" src={img5}></img>
          </div>
          <div className="third-buy-content">
            <div className="third-buy-title">
              Manage & monetize <br />
              IP like never before.
            </div>
            <div className="third-buy-text">
              Create new revenue streams by allowing partners and audiences to
              co-own parts of the original IP or its derivatives. Extend IP
              distribution and reach. Gain control over how you provide access
              to your IP to monetize in unparalleled ways. With antic your IPs
              value chain becomes unbreakable, 100% controllable, and infinitely
              expandable.
            </div>
            <div className="third-buy-button">
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
