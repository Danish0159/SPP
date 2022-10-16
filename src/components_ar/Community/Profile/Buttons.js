import React from "react";
import styled from "styled-components";
import { ButtonsWrapper } from "../../../Shared/CardLayout";

const Buttons = ({ handleStep, step }) => {

  const steps = [
    "معلومات شخصية",
    "المشاريع الشخصية",
    "مشاركات المدونة الشخصية",
    "أفكار شخصية",
    "أضف مشروع",
    "أضف منشور مدونة",
    "أضف فكرة"
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
`;