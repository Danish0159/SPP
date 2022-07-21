import React from "react";
import styled from "styled-components";
import { ButtonsWrapper } from "../../Shared/styled";

const Buttons = ({ handleStep, step }) => {
  const steps = [
    "Home Feed",
    "Inbox",
    "Communities",
    "Enrolled Courses",
  ];

  return (
    <Wrapper>
      <ButtonsWrapper>
        {steps.map((label, index) => (
          <button
            key={index}
            className={step === index ? "btn active" : "btn nonActive"}
            onClick={() => handleStep(index)}
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
    background-color: #ffffff;
  }
  .nonActive {
    background-color: #ffffff;
    opacity: 0.8;
  }
  .btn {
    color: #424d83;
    width: 150px;
  }
`;