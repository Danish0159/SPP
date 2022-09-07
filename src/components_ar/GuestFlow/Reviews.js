import React from "react";
import styled from "styled-components";
import { Rating } from "@mui/material";

const Reviews = ({ single, review, title, cname, pname, rating }) => {
  // Single Review For Single Project.
  if (single) {
    return (
      <Wrapper>
        <h1 className="review__cname">{cname}</h1>
        <h2 className="review__title">({title})</h2>

        <p className="review__paragraph">
          {review}
        </p>
        <div align="center">
          <Rating precision={0.5} name="read-only" value={rating} className="review__rating" style={{ direction: "ltr" }} />
        </div>
        <p className="review__pname">
          <b>" {pname} "</b>
        </p>
      </Wrapper >
    );
  }
  return null;
};

export default Reviews;

const Wrapper = styled.section` 

  min-height: 25rem;
  margin: 0rem 2rem;
  padding: 1rem;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 8px 20px 4px rgb(0 0 0 / 5%);

  .review__cname {
    font-weight: 700;
    font-size: 2rem;
    color: blue;
    text-align: center;
    width: 100%;
    padding: 1rem;
    padding-bottom: 0rem;
  }

  .review__title {
    font-weight: 600;
    font-size: 1.7rem;
    color: darkblue;
    text-align: center;
    width: 100%;
    padding: 1rem;
    padding-top: 0rem;
  }

  .review__paragraph {
    font-weight: 500;
    font-size: 1.7rem;
    padding-top: 1rem;
    text-align: center;
    width: 100%;
    padding: 1.5rem;
  }

  .review__rating {
    font-size: 2rem;
    padding: 1rem;
    padding-bottom: 0rem;
  }

  .review__pname {
    font-weight: 900;
    font-size: 1.7rem;
    text-align: center;
    width:100%;
    margin-bottom: 1rem;
    padding: 1rem;
    padding-top: 0rem;
  }

`;