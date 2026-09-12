import brandLogo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import "./menu.css";
import { useState } from "react";
const Menubar = () => {
  const [isDrawerOpen, SetIsDrawerOpen] = useState(false);
  const handleDrawerShow = () => {
    SetIsDrawerOpen((prev) => !prev);
  };
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="mobile-menu-button">
          <button className="btn" type="button" onClick={handleDrawerShow}>
            <img src={menu} alt="" />
          </button>
        </div>
        <div className="mobile-menu-brand">
          <img className="mobile-menu-brand-image" src={brandLogo} alt="logo" />
        </div>
        <div className={`wrapper ${isDrawerOpen ? "open" : ""}`}>
          <button className="btn size" type="button" onClick={handleDrawerShow}>
            <img className="close-btn" src={close} alt="" />
          </button>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#">
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
        <div className="cart">
          <img src={cart} alt="" />
        </div>
        <div className="profile">
          <img className="avatar" src={avatar} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
