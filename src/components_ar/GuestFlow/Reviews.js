import React from "react";
import styled from "styled-components";
import { Rating } from "@mui/material";

const Reviews = ({ single, review, title, rating }) => {
  // Single Review For Single Project.
  if (single) {
    return (
      <Wrapper>
        <div className="review__item">
          <h1 style={{ fontSize: "1.5rem", marginTop: "1.4rem" }}>{title ? title : "لم يتم تقديم أي تعليقات"}</h1>
          <p className="review__paragraph">
            {review}
          </p>
          <br />
          <Rating sx={{ direction: "ltr" }} precision={0.5} name="read-only" value={rating} style={{ fontSize: "1.9rem" }} readOnly />
        </div>
      </Wrapper >
    );
  }
  return null;
};

export default Reviews;

const Wrapper = styled.section`  

  .review__item {
    max-width: 39rem;
    min-height: 25rem;
    text-align: center;
    border-radius: 20px;
    background-color: white;
    padding: 2rem;
    box-shadow: 0px 10px 24px 6px rgb(0 0 0 / 6%);
  }

  .review__paragraph {
    font-size: 1.6rem;
    color: #2a2a2a;
    width: 100%;
    text-align: center;
  }

  @media only screen and (max-width: 1000px) {

    .review__item h1 {
      font-size: 1.3rem;
    }

    .review__paragraph {
    font-size: 1.4rem;
    }
    
  }


`;