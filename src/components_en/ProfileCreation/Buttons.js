import React from "react";
import styled from "styled-components";
import { ButtonsWrapper } from "../../Shared/styled";

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
  return (
    <Wrapper>
      <ButtonsWrapper>
        {steps.map((label, index) => (
          <button
            key={label}
            id={activeStep === null ? "hide-on-mobile" : ""}
            className={index === activeStep ? "btn active" : "btn nonActive"}
          >
            {label}
          </button>
        ))}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.section`
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
  }
  #hide-on-mobile {
    @media only screen and (max-width: 850px) {
      display: none;
    }
  }
`;