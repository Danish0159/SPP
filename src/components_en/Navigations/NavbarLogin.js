import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const NavbarLogin = () => {
  return (
    <div className="nav__parent">
      <div className="nav__container">
        <Link className="navbar__link" to="/">
          <img className="navbar__logo" src={logo} alt="Logo" />
        </Link>
        <Link to="/Signup" className="btn-small">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavbarLogin;