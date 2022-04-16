import React from "react";
import logo from "../../images/logo3.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const NavbarWelcome = () => {
  return (
    <div className="nav__container">
      <Link className="navbar__link" to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </Link>
      <Avatar sx={{ width: 47, height: 47 }}></Avatar>
    </div>
  );
};

export default NavbarWelcome;