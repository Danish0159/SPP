import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo3.png";
const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__container">
        <div className="footer__left">
          <Link to="/ar">
            <img className="navbar__logo" src={logo} alt="Logo" />
          </Link>
          <p className="footer__paragraph">
            مقاول دوت كوم يربط المقاول والمصممين
            <br /> في جميع أنحاء العالم مع مساعدة الناس في العثور على أفضل مقاول
            <br /> والمصممين الذين يبحثون عنهم.
          </p>
        </div>
        <div className="footer__right">
          <a href="/ar">معلومات عنا</a>
          <a href="/ar">اتصل بنا</a>
          <a href="/ar">سياساتنا</a>
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
  .navbar__logo {
    height: 6rem;
    margin-bottom: 1.7rem;
    @media only screen and (max-width: 850px) {
      height: 4.2rem;
    }
  }
`;