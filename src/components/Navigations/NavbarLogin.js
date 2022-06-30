import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../images/logo3.png";

const NavbarLogin = () => {
  const { t } = useTranslation();
  return (
    <div className="nav__container">
      <Link className="navbar__link" to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </Link>
      <Link to="/Signup" className="btn-small btn-nav">
        {t("Register Now")}
      </Link>
    </div>
  );
};

export default NavbarLogin;