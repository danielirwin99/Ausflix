import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import Logo from "../assets/logo.png";
import Banner from "../assets/banner.svg"

const Nav = () => {
  return (
    <>
      <img
        className="nav__banner"
        src={Banner}
        alt=""
      />
      <div className="nav__container">
        <Link to="/">
          <div className="nav__logo">
            <img className="logo" src={Logo} alt="" />
            <h1 className="nav__header">AusFlix</h1>
          </div>
        </Link>
        <ul className="nav__list">
          <li className="nav__links">
            <Link to="/" className="nav__link ausflix">
              Home
            </Link>
          </li>
          <li className="nav__links">
            <Link to="/results" className="nav__link ausflix">
              Find Your Movie
            </Link>
          </li>
          <li className="nav__links">
            <Link to="/" className="nav__link contact">
              <button className="nav__btn">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
