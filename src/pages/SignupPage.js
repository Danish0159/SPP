import React from "react";
import { Signup } from "../components";
import { NavbarSignUp } from '../components/Navigations'

const SignupPage = () => {
  return (
    <main>
      <NavbarSignUp></NavbarSignUp>
      <Signup></Signup>
    </main>
  );
};

export default SignupPage;