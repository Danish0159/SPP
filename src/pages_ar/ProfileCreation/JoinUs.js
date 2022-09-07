import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../../components_ar";
import { Buttons } from "../../components_ar/ProfileCreation";
import image from "../../images/join_cleanup.jpg";
import { CardLayout } from '../../Shared/styled'
import { NavbarProfileCreation } from "../../components_ar/Navigations";
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
              <p className="join__title">انضم إلينا</p>
              {user && <p className="join__subTitle">أهلاً {user.name_ar},</p>}
              <p className="join__passage">
              نشكرك على اهتمامك بـمهنتى باعتبارها أكبر منصة للمواهب في العالم ، فنحن نربط ملايين الشركات بمقاولين ومصممين مستقلين مثلك.
              </p>
              <p className="join__subTitle">
                للبدء ، كل ما عليك فعله هو ملء ملف تعريف
              </p>
              <Link className="blue-btn join__btn" to="/RegistrationPagear">
                استمر
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