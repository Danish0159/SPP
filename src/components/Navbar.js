import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  if (page === "home") {
    return (
      <Navigation>
        <div className="nav__container">
          <a className="navbar__link" href="#">
            <h1 className="navbar__logo">4M</h1>
          </a>
          <Link to="/Login" className="btn-small">
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
            <h1 className="navbar__logo">4M</h1>
          </a>
          <Link to="/Signup" className="btn-small">
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
            <h1 className="navbar__logo">4M</h1>
          </a>
          {/* <Link to="/Login" className="btn-small">
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
          <Link to="#" className="btn-small">
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
    max-width: 122rem;
    margin: auto;
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar__logo {
    color: white;
    font-size: 3rem;
    font-weight: 600;
  }
`;
