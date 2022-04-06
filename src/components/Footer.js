import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__container">
        <div className="footer__left">
          <h1 className="footer__title">4M</h1>
          <p className="footer__paragraph">
            Search the world information including webpages,
            <br /> images, videos and more. Google has many special
            <br /> features to help you find exactly what you use <br />
            and pay for.
          </p>
        </div>
        <div className="footer__right">
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Our Policies</a>
          <br />
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: #424d83;
  color: #ffffff;
  padding: 3rem 2rem;

  .footer__container {
    max-width: 105rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      align-items: start;
    }
  }
  .footer__title {
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
  }
  .footer__paragraph {
    font-size: 1.5rem;
    line-height: 1.6;
    @media only screen and (max-width: 900px) {
      margin-bottom: 2rem;
    }
  }
  .footer__right a {
    color: white;
    display: block;
    font-size: 1.6rem;
    padding: 0.5rem 0rem;
  }
`;
