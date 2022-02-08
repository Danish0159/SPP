import React from "react";
import styled from "styled-components";
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

const Wrapper = styled.section``;
