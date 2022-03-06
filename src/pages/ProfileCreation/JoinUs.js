import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Footer } from "../../components";
import { Buttons } from "../../components/ProfileCreation";
import image from "../../images/join.jpg";

const JoinUs = () => {
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
            <p className="hero__title">Join Us</p>
            <p className="hero__subTitle">Hi Darrin,</p>
            <p className="hero__passage">
              Thanks for your interest in Crowd as the world's largest talent
              platform, we connect millions of businesses with independent
              contractors and designers like you.
            </p>
            <p className="hero__subTitle">
              To get started, all you need to do is fill out a profile
            </p>
            <Link className="blue-btn join-btn" to="/RegistrationPage">
              CONTINUE
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
  max-width: 115rem;
  margin: auto;
  padding: 5rem 2rem;
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 2fr 8fr;
  align-items: flex-start;
  grid-gap: 3rem;
  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  .hero {
    box-shadow: 0 0 6px #888;
  }
  .hero__img > img {
    width: 100%;
    height: 350px;
    @media only screen and (max-width: 850px) {
      height: 240px;
    }
  }

  .hero__content {
    padding: 3rem 2rem;
  }

  .hero__title,
  .hero__subTitle,
  .hero__passage {
    color: var(--clr-black);
  }

  .hero__title {
    font-size: 2.3rem;
    font-weight: 600;
  }

  .hero__subTitle {
    font-size: 1.7rem;
  }
  .hero__passage {
    font-size: 1.5rem;
  }
  .hero__content > * {
    margin-bottom: 2rem;
  }

  .join-btn {
    font-size: 1.6rem;
    border-radius: 25px;
  }
`;
