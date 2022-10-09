import React from "react";
import { Signup } from "../components_en";
import { NavbarSignUp } from '../components_en/Navigations';

const SignupPage = () => {
  return (
    <main>
      <NavbarSignUp></NavbarSignUp>
      <Signup></Signup>
    </main>
  );
};

export default SignupPage;