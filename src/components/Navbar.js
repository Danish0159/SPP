import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";

const Navbar = ({ page }) => {
  if (page === "home") {
    return (
      <Navigation>
        <div className="nav__container">
          {/* <a className="navbar__link" href="#"> */}
          <img className="navbar__logo" src={logo} alt="Logo" />
          {/* </a> */}
          <Link to="/Login" className="btn-small btn-nav">
            Login
          </Link>
        </div>
      </Navigation>
    );
  }

  if (page === "login") {
    return (
      <Navigation>
        <div className="nav__container">
          <a className="navbar__link" href="#">
            <img className="navbar__logo" src={logo} alt="Logo" />
          </a>
          <Link to="/Signup" className="btn-small btn-nav">
            Register Now
          </Link>
        </div>
      </Navigation>
    );
  }

  if (page === "signup") {
    return (
      <Navigation>
        <div className="nav__container">
          <a className="navbar__link" href="#">
            <img className="navbar__logo" src={logo} alt="Logo" />
          </a>
          {/* <Link to="/Login" className="btn-small btn-nav">
            Login
          </Link> */}
        </div>
      </Navigation>
    );
  }

  if (page === "welcome") {
    return (
      <Navigation>
        <div className="nav__container">
          <a className="navbar__link" href="#">
            <h1 className="navbar__logo">4M</h1>
          </a>
          <Link to="#" className="btn-small btn-nav">
            User Avatar
          </Link>
        </div>
      </Navigation>
    );
  }
};
export default Navbar;

const Navigation = styled.nav`
  background-color: #424d83;
  .nav__container {
    max-width: 119rem;
    margin: auto;
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar__logo {
    height: 6rem;
    @media only screen and (max-width: 850px) {
      height: 4.2rem;
    }
  }
  .btn-nav {
    @media only screen and (max-width: 850px) {
      align-self: flex-end;
    }
  }
`;
