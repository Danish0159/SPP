import React from "react";
import styled from "styled-components";
import { subCategories } from "../../utils/constants";

const Buttons = ({ handleStep, step }) => {
  const searchValues = JSON.parse(localStorage.getItem("searchValues"));
  return (
    <Wrapper>
      <h2 className="subcatgories__title">{searchValues.category} Subcategory</h2>
      {subCategories[searchValues.user][searchValues.category].map((label, index) => (
        <button
          key={index}
          className={step === label.value ? "btn active" : "btn nonActive"}
          onClick={() => handleStep(label.value)}
        >
          {label.value}
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
  .btn {
      color: white;
    width: 330px;
    padding: 1.2rem 0.5rem;
    border: none;
    margin: 0.9rem 0rem;
    font-size: 1.7rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
    }
  .active {
    background-color: #424d83;
  }
  .nonActive {
    background-color: #ffffff;
    border: 1px solid black;
    color: var(--clr-black);
}
  .subcatgories__title{
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: var(--clr-blue-2);
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;