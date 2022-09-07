import React from "react";
import styled from "styled-components";
import HeroImage from "../../../images/hero.jpg";

function Hero() {
  return (
    <Wrapper>
      <div className="hero__grid">

        <div className='hero__left'>
          <a href="#Contractors" className='hero__role'>Contractors</a>
          <a href="#Maintenance" className='hero__role'>Maintenance</a>
          <a href="#Designers" className='hero__role'>Designers</a>
          <a href="#Consultants" className='hero__role'>Consultants</a>
        </div>

        <div className="hero__content">
          <h2 className="hero__title">Everything Is In Your Hands</h2>
          <p className="hero__paragraph">Search for the best construction experts in your locality, and verify their previous experiences before contacting them.</p>
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
      padding: 20px;
    }
    .hero__left {
      display: none;
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
    background-color: #424d83;
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