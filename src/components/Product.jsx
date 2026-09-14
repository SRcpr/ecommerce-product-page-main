import { useState } from "react";
import cart from "../assets/icon-cart.svg";
import "./product.css";
const Product = () => {
  const [count, setCount] = useState(0);
  const handleCount = (countValue) => {
    if (countValue === "plus") {
      setCount(count + 1);
    }
    if (countValue === "minus") {
      count > 0 ? setCount(count - 1) : setCount(0);
    }
  };
  return (
    <section className="product-section">
      <div className="product-heading">
        <small className="small-desc">SNEAKER COMPONY</small>
        <h1>Fall Limited Edition Sneakers</h1>
      </div>
      <div className="product-description">
        <p className="product-description text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="product-price-level">
        <div className="current-price">
          <p>
            $125.00 <span>50%</span>
          </p>
        </div>
        <div className="discount-price">
          <p>$250.00</p>
        </div>
      </div>
      <div className="product-cart">
        <div className="cart-count">
          <button
            type="button"
            className="btn text"
            onClick={() => handleCount("minus")}
          >
            -
          </button>
          <span>{count}</span>
          <button
            type="button"
            className="btn text"
            onClick={() => handleCount("plus")}
          >
            +
          </button>
        </div>
        <div className="cart-button">
          <img src={cart} alt="" />
          <span>Add to Cart</span>
        </div>
      </div>
    </section>
  );
};

export default Product;
