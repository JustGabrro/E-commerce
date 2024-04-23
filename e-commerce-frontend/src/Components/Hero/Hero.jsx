import React from "react";
import "./Hero.css";
import hero_image from "../Assets/gabr1.png";
import bag_icon from "../Assets/bag-icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div className="hero-hand-icon">
            <p>უახლესი</p>
            <img src={bag_icon} alt="" />
          </div>
          <p>კოლექცია</p>
          <p></p>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;