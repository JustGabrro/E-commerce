import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <p>(0)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₾{product.old_price}</div>
          <div className="productdisplay-right-price-new">₾{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          უმაღლესი ხარისხის მჭიდროდ ნაქსოვი ტანსაცმელი.
        </div>
        <div className="productdisplay-right-size">
          <h1>აირჩიეთ ზომა</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>კალათში დამატება</button>
        <p className="productdisplay-right-category"><span>კატეგორია :</span>ქალბატონები</p>
        <p className="productdisplay-right-category"><span>იარლიყი :</span> თანამედროვე, უახლესი</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
