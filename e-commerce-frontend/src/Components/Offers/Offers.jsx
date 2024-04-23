import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/gabr1.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>ექსკლუზიური</h1>
        <h1>შემოთავაზებები</h1>
        <p>საუკეთესო გაყიდვები</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
