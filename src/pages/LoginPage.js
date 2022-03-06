import React from "react";
import { Navbar, Login } from "../components";

const LoginPage = () => {
  return (
    <main>
      <Navbar page="login"></Navbar>
      <Login></Login>
    </main>
  );
};

export default LoginPage;
