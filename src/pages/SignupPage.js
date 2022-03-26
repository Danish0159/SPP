import React from "react";
import { Navbar, Signup } from "../components";

const SignupPage = () => {
  return (
    <main>
      <Navbar page="signup"></Navbar>
      <Signup></Signup>
    </main>
  );
};

export default SignupPage;
