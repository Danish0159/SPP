import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../images/logo3.png";

const NavbarHome = () => {
  const { t } = useTranslation();

  return (
    <div className="nav__container">
      <Link to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </Link>
      <Link to="/Login" className="btn-small btn-nav">
        {t("home_login")}
      </Link>
    </div>
  );
};

export default NavbarHome;
