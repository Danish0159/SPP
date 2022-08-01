import React from "react";
import styled from "styled-components";
import { Rating } from "@mui/material";

const Reviews = ({ single, review, title, rating }) => {
  // Single Review For Single Project.
  if (single) {
    return (
      <Wrapper>
        <div className="reviews__grid max-restrict">
          <div className="reviews__item">
            <p className="reviews__paragraph">
              {review}
            </p>
            <h1 style={{ fontSize: "1.5rem", marginTop: "1.4rem" }}>{title ? title : "No feedback given"}</h1>
            <br />
            <Rating precision={0.5} name="read-only" value={rating} style={{ fontSize: "1.9rem" }} readOnly />
          </div>
        </div>
      </Wrapper >
    );
  }
  // Multiple Review For Single User.
  return (
    <Wrapper>
      <div className="reviews__grid">
        <div className="reviews__item">
          <p className="reviews__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
            blanditiis obcaecati, neque sint sequi accusamus minima
          </p>
          <h1 style={{ fontSize: "1.5rem", marginTop: "1.4rem" }}>Director - Maqawal</h1>
        </div>
        <div className="reviews__item">
          <p className="reviews__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
            blanditiis obcaecati, neque sint sequi accusamus minima
          </p>
          <h1 style={{ fontSize: "1.5rem", marginTop: "1.4rem" }}>Director - Orange</h1>
        </div>
        <div className="reviews__item">
          <p className="reviews__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. culpa
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. culpa
            deserunt, dolor ut veniam minus illo iusto ea totam veritatis.
          </p>
          <h1 style={{ fontSize: "1.5rem", marginTop: "1.4rem" }}>Director - Speedo</h1>
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
  /* For Single Review. */
  .max-restrict{
    max-width:40rem;
  }
`;