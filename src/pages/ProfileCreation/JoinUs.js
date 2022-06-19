import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Footer } from "../../components";
import { Buttons } from "../../components/ProfileCreation";
import image from "../../images/join.jpg";
import { CardLayout } from '../../components/Common/styled'
import { useTranslation } from "react-i18next";

const JoinUs = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { t } = useTranslation();

  return (
    <main>
      <Navbar page="profileCreation"></Navbar>
      <CardLayout>
        <Buttons activeStep={null}></Buttons>
        <Wrapper>
          <div className="join card">
            <div className="join__img">
              <img src={image} alt="join" />
            </div>
            <div className="join__content">
              <p className="join__title">{t("join__title")}</p>
              {user && <p className="join__subTitle">{t("join__Hi")} {user.name},</p>}
              <p className="join__passage">
                {t("join__description")}
              </p>
              <p className="join__subTitle">
                {t("join__started")}
              </p>
              <Link className="blue-btn join__btn" to="/RegistrationPage">
                {t("join__continue")}
              </Link>
            </div>
          </div>
        </Wrapper>
      </CardLayout>
      <Footer></Footer>
    </main>
  );
};

export default JoinUs;

const Wrapper = styled.section`
  .join__img > img {
    width: 100%;
    height: 350px;
    @media only screen and (max-width: 850px) {
      height: 240px;
    }
  }
  .join__content {
    padding: 3rem 2rem;
  }

  .join__title,
  .join__subTitle,
  .join__passage {
    color: var(--clr-black);
  }

  .join__title {
    font-size: 2.3rem;
    font-weight: 600;
  }

  .join__subTitle {
    font-size: 1.7rem;
  }

  .join__passage {
    font-size: 1.5rem;
  }

  .join__content > * {
    margin-bottom: 2rem;
  }

  .join__btn {
    font-size: 1.6rem;
    border-radius: 25px;
  }
`;