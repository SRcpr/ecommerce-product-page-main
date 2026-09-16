import brandLogo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import "./menu.css";
import { useContext, useState } from "react";
import { DatabaseContext } from "../context/Database";
import FilledCheckout from "./FilledCheckout";
const Menubar = () => {
  // const cartValue = useContext(DatabaseContext);
  const cartValue = 1;
  console.log(cartValue);
  const [isDrawerOpen, SetIsDrawerOpen] = useState(false);
  const [isCartOpen, SetIsCartOpen] = useState(true);
  const handleDrawerShow = () => {
    SetIsDrawerOpen((prev) => !prev);
  };
  const handleCartOpen = () => {
    SetIsCartOpen((prev) => !prev);
  };
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="mobile-menu-button">
          <button
            className="btn"
            aria-label="open-menu"
            type="button"
            onClick={handleDrawerShow}
          >
            <img className="menu-btn" src={menu} alt="" />
          </button>
        </div>
        <div className="mobile-menu-brand">
          <img
            className="mobile-menu-brand-image"
            src={brandLogo}
            alt="brand-logo"
          />
        </div>
        <div className={`wrapper ${isDrawerOpen ? "open" : ""}`}>
          <button
            className="btn size"
            aria-label="open-menu"
            type="button"
            onClick={handleDrawerShow}
          >
            <img className="close-btn" src={close} alt="" />
          </button>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Collections
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-cart">
        <button type="button" onClick={handleCartOpen} className="btn cart">
          <img src={cart} alt="" />
          <span className="cart-position">{cartValue}</span>
        </button>
        <button type="button" className="btn profile" aria-label="avatar">
          <img className="avatar" src={avatar} alt="" />
        </button>
      </div>
      <div className={`cart-box  ${isCartOpen ? "open" : ""}`}>
        <h3>Cart</h3>
        <div className="cart-details">
          {cartValue > 0 ? <FilledCheckout /> : <p>Your cart is empty.</p>}
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
