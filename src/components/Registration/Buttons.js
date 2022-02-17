import React from "react";
import styled from "styled-components";

const Buttons = ({ activeStep }) => {
  const steps = [
    "Category",
    "Expertise Level",
    "Employment History",
    "Portfolio",
    "Rate",
    "Location",
    "Profile Photo",
    "Phone Number",
  ];

  return (
    <Wrapper>
      {steps.map((label, index) => (
        <button
          key={label}
          className={index === activeStep ? "btn active" : "btn nonActive"}
        >
          {label}
        </button>
      ))}
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.section`
  width: 20%;
  background-color: green;
  margin-right: 2.5rem;
  .active {
    background-color: #424d83;
  }

  .nonActive {
    background-color: #8c9efc;
  }

  .btn {
    width: 120px;
    padding: 2rem 0.2rem;
    border: none;
    margin: 0.5rem 0rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
  }
`;
