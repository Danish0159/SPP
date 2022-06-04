import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Buttons = ({ activeStep }) => {
  const steps = [
    "Category",
    "Expertise Level",
    "Employment History",
    "Portfolio",
    "Location",
    "Phone Number",
    "Profile Photo",
  ];
  const { t } = useTranslation();
  return (
    <Wrapper>
      {steps.map((label, index) => (
        <button
          key={label}
          id={activeStep === null ? "hide-on-mobile" : ""}
          className={index === activeStep ? "btn active" : "btn nonActive"}
        >
          {t(label)}
        </button>
      ))}
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .active {
    background-color: #424d83;
  }

  .nonActive {
    background-color: #424d83;
    opacity: 0.7;
  }

  .btn {
    color: white;
    width: 150px;
    padding: 1.2rem 0.5rem;
    border: none;
    margin: 0.9rem 0rem;
    font-size: 1.7rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
  }
  #hide-on-mobile {
    @media only screen and (max-width: 850px) {
      display: none;
    }
  }
`;