import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeroImage from "../images/HeroImage.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="hero__grid">

        <div className='hero__left'>
          <a href="#Handymen" className='hero__role'>Handymen</a>
          <a href="#Contractors" className='hero__role'>Contractor</a>
          <a href="#Designers & Consultants" className='hero__role'>Designer</a>
          <a href="#Designers & Consultants" className='hero__role'>Consultant</a>
        </div>

        <div className="hero__content">
          <h2 className="hero__title">{t("home_title")}</h2>
          <p className="hero__paragraph">{t("home_subtitle")}</p>
        </div>

        <figure className="hero__div">
          <img className="hero__img" src={HeroImage} alt="Hero" />
        </figure>
      </div>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.section`
  background-color: #424d83;
  color: #ffffff;
  display: flex;
  align-items: center;
  .hero__title {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
  }

  .hero__grid {
    max-width: 135rem;
    margin: auto;
    display: grid;
    grid-template-columns:1fr 1.5fr 1fr;
    grid-gap: 1rem;
  }

  @media only screen and (max-width: 950px) {
    .hero__grid {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      max-width: 100%;
      grid-gap: 2rem;
    }
  }

  .hero__content {
    padding: 0rem 2rem;
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
    align-self: center;
    justify-self:center;
    width: 80%;
    height: 100%;
  }
  .hero__img {
    padding: 2rem 0rem;
    width: 100%;
    display: block;
    height: 100%;
  }

  .hero__role{
    background-color: rgb(117, 115, 115);
    border-bottom: 1px solid white;
    min-width: 100%;
    padding: 22px 80px;
    display: block;
    font-weight: 700;
    font-size: 2.5rem;
    cursor: pointer;
    color: #ffffff;
    text-align: center;
  }
  .hero__role:last-child{
       border-bottom: none;
  }
`;