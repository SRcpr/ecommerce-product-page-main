import brandLogo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import "./menu.css";
const Menubar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="mobile-menu-button">
          <a href="#">
            <img src={menu} alt="" />
          </a>
        </div>
        <div className="mobile-menu-brand">
          <img className="mobile-menu-brand-image" src={brandLogo} alt="logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav" href="#">
              Collections
            </a>
          </li>
          <li className="nav-item">
            <a className="nav" href="#">
              Men
            </a>
          </li>
          <li className="nav-item">
            <a className="nav" href="#">
              Women
            </a>
          </li>
          <li className="nav-item">
            <a className="nav" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav" href="#">
              Contact
            </a>
          </li>
        </ul>
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
