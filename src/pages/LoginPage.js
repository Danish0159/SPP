import React from "react";
import { Login } from "../components";
import { NavbarLogin } from '../components/Navigations'

const LoginPage = () => {
  return (
    <main>
      <NavbarLogin></NavbarLogin>
      <Login></Login>
    </main>
  );
};

export default LoginPage;
