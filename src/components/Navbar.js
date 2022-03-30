import React from "react";
import styled from "styled-components";
import {
  NavbarHome,
  NavbarLogin,
  NavbarSignUp,
  NavbarWelcome,
  NavbarProfileCreation,
} from "./Navigations";

const Navbar = ({ page }) => {
  switch (page) {
    case "home":
      return (
        <Navigation>
          <NavbarHome></NavbarHome>
        </Navigation>
      );
    case "login":
      return (
        <Navigation>
          <NavbarLogin></NavbarLogin>
        </Navigation>
      );
    case "signup":
      return (
        <Navigation>
          <NavbarSignUp></NavbarSignUp>
        </Navigation>
      );
    case "profileCreation":
      return (
        <Navigation>
          <NavbarProfileCreation></NavbarProfileCreation>
        </Navigation>
      );
    case "welcome":
      return (
        <Navigation>
          <NavbarWelcome></NavbarWelcome>
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

// Reference for dropdown.
// https://codesandbox.io/s/ys5wjr?file=/demo.js

// Reference for code
// https://github.com/bradtraversy/mern-tutorial/blob/main/frontend/src/components/Header.jsx
