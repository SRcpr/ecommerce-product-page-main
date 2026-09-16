import del from "../assets/icon-delete.svg";
import product1 from "../assets/image-product-1.jpg";
import "./filledCheckout.css";
const FilledCheckout = () => {
  return (
    <div className="checkout">
      <div className="checkout-item">
        <div className="checkout-image">
          <img src={product1} alt="checkout product" />
        </div>
        <div className="checkout-info">
          <p>
            Fall Limited Edition Sneakers $125.00 X 3 <span>$375.00</span>
          </p>
        </div>
        <div className="checkout-delete">
          <img src={del} alt="delete button" />
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
