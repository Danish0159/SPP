import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import avatar from "../images/avatar.png";

const BackToProfile = () => {
  return (
    <Wrapper>
      <div className="backToProfile">
        <div className="backToProfile__grid">
          <div className="backToProfile__profile">
            <img className="avatar" src={avatar} alt="Avatar" />
            <div className="BackToProfile__content">
              <h1 className="BackToProfile--title">James E. Roger</h1>
              <p className="BackToProfile-subtitle">Designer</p>
            </div>
          </div>
          <div className="backToProfile__btns">
            <Link to="#" type="submit" className="blue-btn backToProfile-btn">
              Message Now
            </Link>
            <Link to="#" type="submit" className="blue-btn backToProfile-btn">
              Back To Profile
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BackToProfile;

const Wrapper = styled.section`
  width: 100%;
  .backToProfile {
  }

  .backToProfile__grid {
    padding: 6rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 118rem;
    margin: auto;
    width: 100%;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
  }

  .backToProfile__profile {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .avatar {
    display: inline-block;
    width: 130px;
  }

  .backToProfile-btn {
    display: block;
    font-size: 1.8rem;
    padding: 0.9rem 2.5rem;
    margin: 2rem 0rem;
  }

  .BackToProfile__content {
    margin-left: 3rem;
    @media only screen and (max-width: 800px) {
      margin-left: 0rem;
      margin-top: 1.5rem;
    }
  }

  .BackToProfile--title {
    font-size: 2.2rem;
    color: var(--clr-black);
  }

  .BackToProfile-subtitle {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--clr-black);
    @media only screen and (max-width: 800px) {
      margin-bottom: 3rem;
    }
  }
`;
