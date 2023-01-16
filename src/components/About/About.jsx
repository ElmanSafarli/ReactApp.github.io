import React, { useRef, useEffect } from "react";
import "./about.css";
import Rellax from "rellax";

const About = () => {
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".rellax", {
      vertical: true,
      horizontal: false,
    });

    new Rellax(rellaxRef.current, {
      speed: -10,
      horizontal: true,
    });
  }, []);

  return (
    <div className="about">
      <div id="about-content" className="rellax" data-rellax-speed="10">
        <span className="about-left-span"></span>
        <div className="about-left">
          <div className="title-about">We’ve cracked co-ownership</div>
          <div className="about-part1">
            Antic develops web3 solutions that power companies from the fields
            of entertainment, gaming and e-commerce to unlock the potential of
            co-ownership.
          </div>
        </div>
        <div className="about-right">
          Implement antic to uncover new revenue streams, create smart contracts
          faster and cheaper and monetize intellectual property and its
          derivatives in groundbreaking ways.
          <div className="about-btn">
            <button>Apply for beta</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
