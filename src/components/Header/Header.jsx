import React, { useRef, useEffect } from "react";
import "./header.css";
import Rellax from "rellax";
import imgUrl from "../assets/header-img.png";

const Header = () => {
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".parellax", {
      speed: -10,
      horizontal: true,
    });

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
    <div className="Header">
      <div className="content-head">
        <div className="head-text">
          <div
            id="head-text-1"
            class="parellax"
            ref={rellaxRef}
            data-rellax-horizontal-speed="80"
            data-rellax-vertical-scroll-axis="x"
          >
            <span className="header-text-span-2">We’ve</span>
            <br /> cracked
          </div>
          <img
            src={imgUrl}
            alt="header-bg"
            id="header-bg"
            className="rellax"
            data-rellax-speed="1"
          ></img>
          <div
            id="head-text-2"
            className="parellax"
            ref={rellaxRef}
            data-rellax-horizontal-speed="-80"
            data-rellax-vertical-scroll-axis="x"
          >
            <span className="header-text-span-2">co-</span>
            <br /> ownership
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
