import { useState } from "react";
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
        <p className="small-desc">SNEAKER COMPONY</p>
        <h1>Fall Limited Edition Sneakers</h1>
      </div>
      <div className="product-description">
        <p className="product-description"></p>
      </div>
      <div className="product-price-level"></div>
      <div className="product-cart">
        <div className="cart-count">
          <button
            type="button"
            className="btn"
            onClick={() => handleCount("minus")}
          >
            -
          </button>
          <span>{count}</span>
          <button
            type="button"
            className="btn"
            onClick={() => handleCount("plus")}
          >
            +
          </button>
        </div>
        <div className="cart-button">Add to Cart</div>
      </div>
    </section>
  );
};

export default Product;
