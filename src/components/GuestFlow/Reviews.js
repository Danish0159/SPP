import React from "react";
import styled from "styled-components";

const Reviews = () => {
  return (
    <Wrapper>
      <div className="reviews__grid">
        <div className="reviews__item">
          <p className="reviews__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
            blanditiis obcaecati, neque sint sequi accusamus minima
          </p>
        </div>
        <div className="reviews__item">
          <p className="reviews__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
            blanditiis obcaecati, neque sint sequi accusamus minima
          </p>
        </div>
        <div className="reviews__item">
          <p className="reviews__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. culpa
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. culpa
            deserunt, dolor ut veniam minus illo iusto ea totam veritatis.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Reviews;

const Wrapper = styled.section`
  .reviews__grid {
    max-width: 110rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-gap: 4rem;
    margin-bottom: 1.5rem;
  }

  @media only screen and (max-width: 1150px) {
    .reviews__grid {
      margin: 0rem 2rem;
      margin-bottom: 4rem;
      max-width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
  }

  .reviews__item {
    border-radius: 10px 10px 10px 10px;
    background-color: #ffffff;
    padding: 3rem 3rem;
    box-shadow: 0px 10px 24px 6px rgb(0 0 0 / 6%);
  }

  .reviews__paragraph {
    font-size: 1.6rem;
    color: #2a2a2a;
  }
`;
