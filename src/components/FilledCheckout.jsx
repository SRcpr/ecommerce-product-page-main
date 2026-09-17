import { useContext } from "react";
import del from "../assets/icon-delete.svg";
import product1 from "../assets/image-product-1.jpg";
import "./filledCheckout.css";
import { DatabaseContext } from "../context/Database";
const FilledCheckout = () => {
  const { cartInfo, setCartInfo } = useContext(DatabaseContext);
  const handleCheckoutDelete = () => {
    setCartInfo((prev) => ({
      ...prev,
      cart: 0,
      count: 0,
    }));
  };
  return (
    <div className="checkout">
      <div className="checkout-item">
        <div className="checkout-image">
          <img src={product1} alt="checkout product" />
        </div>
        <div className="checkout-info">
          <p>
            Fall Limited Edition Sneakers $125.00 X{cartInfo.cartSum}
            <span> ${125 * cartInfo.cartSum}</span>
          </p>
        </div>
        <div className="checkout-delete">
          <button
            className="btn"
            type="button"
            onClick={() => handleCheckoutDelete()}
            aria-level="delete checkout item"
          >
            <img src={del} alt="delete button" />
          </button>
        </div>
      </div>
      <div className="checkout-button">
        <button className="btn checkout" type="button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default FilledCheckout;
