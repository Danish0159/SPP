import React from "react";
import { Signup } from "../components_ar";
import { NavbarSignUp } from '../components_ar/Navigations'

const SignupPage = () => {
  return (
    <main>
      <NavbarSignUp></NavbarSignUp>
      <Signup></Signup>
    </main>
  );
};

export default SignupPage;