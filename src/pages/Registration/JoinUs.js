import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Footer } from "../../components";
import { Buttons } from "../../components/Registration";
import image from "../../images/join.jpg";

const JoinUs = () => {
  // const [activeStep, setActiveStep] = useState(null);
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <Wrapper>
        <Buttons activeStep={null}></Buttons>

        <div className="hero">
          <div className="hero__img">
            <img src={image} alt="Hero Image" />
          </div>

          <div className="hero__content">
            <h1>Hi Jhon</h1>
            <p>
              Hi Darrin, Thanks for your interest in Crowd as the world's
              largest talent platform, we connect millions of businesses with
              independent contractors and designers like you. To get started,
              all you need to do is fill out a profile.
            </p>
            <Link className="blue-btn" to="/RegistrationPage">
              continue
            </Link>
          </div>
        </div>
      </Wrapper>

      <Footer></Footer>
    </main>
  );
};

export default JoinUs;

const Wrapper = styled.section`
  display: flex;
  max-width: 115rem;
  margin: auto;
  background-color: skyblue;
  min-height: calc(100vh - 100px);
  padding: 2rem 2rem;
  .hero {
    width: 80%;
    background-color: brown;
  }
  .hero__img > img {
    width: 100%;
    height: 375px;
  }

  .hero__content {
    padding: 0rem 2rem;
  }
  h1,
  p {
    font-size: 1.5rem;
  }
`;
