import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../../components_en";
import { Buttons } from "../../components_en/ProfileCreation";
import image from "../../images/join.jpg";
import { CardLayout } from '../../Shared/styled'
import { NavbarProfileCreation } from "../../components_en/Navigations";
import { getUserFromLocalStorage } from "../../utils/localStorage";
const JoinUs = () => {
  const user = getUserFromLocalStorage();
  return (
    <main>
      <NavbarProfileCreation></NavbarProfileCreation>
      <CardLayout>
        <Buttons activeStep={null}></Buttons>
        <Wrapper>
          <div className="join card">
            <div className="join__img">
              <img src={image} alt="join" />
            </div>
            <div className="join__content">
              <p className="join__title">Join Us</p>
              {user && <p className="join__subTitle">Hi {user.name_en},</p>}
              <p className="join__passage">
                Thanks for your interest in Maqawal as the world's largest talent platform, we connect millions of businesses with independent contractors and designers like you.
              </p>
              <p className="join__subTitle">
                To get started, all you need to do is fill out a profile
              </p>
              <Link className="blue-btn join__btn" to="/RegistrationPage">
                CONTINUE
              </Link>
            </div>
          </div>
        </Wrapper>
      </CardLayout>
      <Footer></Footer>
    </main >
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