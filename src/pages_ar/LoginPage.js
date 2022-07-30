import React from "react";
import { Login } from "../components_ar";
import { NavbarLogin } from '../components_ar/Navigations'

const LoginPage = () => {
  return (
    <main>
      <NavbarLogin></NavbarLogin>
      <Login></Login>
    </main>
  );
};

export default LoginPage;
