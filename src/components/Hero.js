import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeroImage from "../images/HeroImage.jpg";
import { useTranslation } from "react-i18next";
function Hero() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div class="hero__grid">
        <div class="hero__content">
          <h2 class="hero__title">Everything Is In Your Hands</h2>
          <p class="hero__paragraph">{t("this_is_an_example")}</p>
          <Link to="/Welcome" class="btn-small">
            Get Started
          </Link>
        </div>

        <figure class="hero__div">
          <img class="hero__img" src={HeroImage} alt="Hero" />
        </figure>
      </div>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.section`
  background-color: #424d83;
  padding: 5rem 3rem 5rem 3rem;
  color: #ffffff;
  min-height: 50vh;
  display: flex;
  align-items: center;

  .hero__title {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
  }

  .hero__grid {
    max-width: 108rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 6rem;
    align-items: center;
    justify-items: center;
  }

  @media only screen and (max-width: 800px) {
    .hero__grid {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      max-width: 100%;
      grid-gap: 6rem;
    }
  }

  .hero__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .hero__content > * {
    margin-bottom: 2rem;
  }

  .hero__paragraph {
    font-size: 1.8rem;
    line-height: 1.6;
    font-weight: 400;
  }

  .hero__div {
    width: 80%;
    height: 100%;
  }
  .hero__img {
    width: 100%;
    display: block;
    height: 100%;
  }
`;
