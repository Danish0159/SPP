import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__container">
        <div className="footer__left">
          <Link to="/ar">
            <img className="navbar__logo" src={logo} alt="Logo" />
          </Link>
          <p className="footer__paragraph">
          تقوم مهنتى بربط المقاول والمصممين في جميع أنحاء العالم بينما تساعد الناس في العثور على أفضل المقاول والمصممين الذين يبحثون عنهم.
          </p>
        </div>
        <div className="footer__right">
          <a href="/Aboutar">معلومات عنا</a>
          <a href="/ContactUsar">اتصل بنا</a>
          <div className="icons__container">
          <a href="https://instagram.com/mahnty_int?igshid=NmNmNjAwNzg=" ><InstagramIcon className="social__icon" /></a>
          <a href="https://web.facebook.com/mahnty.int/" ><FacebookIcon className="social__icon" /></a>
          <a href="https://www.linkedin.com/company/mahnty" ><LinkedInIcon className="social__icon" /></a>
          </div>
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
    width: 80%;
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

  .icons__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .social__icon {
    font-size: 2.5rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    cursor: pointer;
  }

`;