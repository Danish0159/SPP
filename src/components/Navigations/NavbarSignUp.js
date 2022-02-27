import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo3.png";

const NavbarSignUp = () => {
  return (
    <div className="nav__container">
      <Link className="navbar__link" to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default NavbarSignUp;
