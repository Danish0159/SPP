import React from "react";
import styled from "styled-components";
const FeedNav = ({ handleStep }) => {
  const steps = ["Feed", "Communities", "Create Community (+)", "Courses"];

  return (
    <Wrapper>
      <div className="feed__menu">
        {steps.map((label, index) => (
          <label
            className="feed__item"
            key={index}
            onClick={() => handleStep(index)}
          >
            {label}
          </label>
        ))}
      </div>
    </Wrapper>
  );
};

export default FeedNav;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;

  .feed__menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: whitesmoke;
    padding: 5px;
  }

  .feed__item {
    font-weight: 600;
    font-size: 2.2rem;
    color: #424d83;
    cursor: pointer;
  }

  @media only screen and (max-width: 850px) {
    .feed__item {
      font-size: 1.9rem;
    }
  }

  @media only screen and (max-width: 650px) {
    .feed__item {
      font-size: 1.5rem;
    }
  }
`;
