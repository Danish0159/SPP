import React from "react";
import { Login } from "../components_en";
import { NavbarLogin } from '../components_en/Navigations'

const LoginPage = () => {
  return (
    <main>
      <NavbarLogin></NavbarLogin>
      <Login></Login>
    </main>
  );
};

export default LoginPage;
