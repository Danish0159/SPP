import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo3.png";

const NavbarHome = () => {
  return (
    <div className="nav__container">
      <Link to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </Link>
      <Link to="/Login" className="btn-small btn-nav">
        Login
      </Link>
    </div>
  );
};

export default NavbarHome;
