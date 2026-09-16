import { useState } from "react";
import cart from "../assets/icon-cart.svg";
import "./product.css";
const Product = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(5);
  const handleCount = (countValue) => {
    console.log(countValue);
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
          <h2>
            $125.00 <span>50%</span>
          </h2>
        </div>
        <div className="discount-price">
          <p>$250.00</p>
        </div>
      </div>
      <div className="product-add-cart">
        <div className="count">
          <button
            className="btn w-100"
            type="button"
            onClick={() => handleCount("minus")}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className="btn w-100"
            type="button"
            onClick={() => handleCount("plus")}
          >
            +
          </button>
        </div>
        <div className="add-to-cart">
          <button className="btn btn-cart" type="button">
            <img src={cart} alt="" />
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
