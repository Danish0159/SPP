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
            <h1 style={{ fontSize: "1.5rem", marginTop: "1.4rem" }}>{title ? title : "لم يتم تقديم أي تعليقات"}</h1>
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
          وإيطالي وقوعها، دار بل, عل وتزويده الأرضية أخذ, ساعة والمانيا لكل لم. دنو أم ثمّة القوى الأمور, أدنى أعلنت يرتبط أم جعل. العاصمة وبالرغم أن شيء. كل هذه وبداية بالفشل تكتيكاً. جديدة الأجل يتسنّى كلا هو, جدول أمدها كل حول.
          </p>
          <h1 style={{ fontSize: "1.5rem", marginTop: "1.4rem" }}>المخرج - مقاول</h1>
        </div>
        <div className="reviews__item">
          <p className="reviews__paragraph">
          وإيطالي وقوعها، دار بل, عل وتزويده الأرضية أخذ, ساعة والمانيا لكل لم. دنو أم ثمّة القوى الأمور, أدنى أعلنت يرتبط أم جعل. العاصمة وبالرغم أن شيء. كل هذه وبداية بالفشل تكتيكاً. جديدة الأجل يتسنّى كلا هو, جدول أمدها كل حول.
          </p>
          <h1 style={{ fontSize: "1.5rem", marginTop: "1.4rem" }}>مدير - أورانج</h1>
        </div>
        <div className="reviews__item">
          <p className="reviews__paragraph">
          وإيطالي وقوعها، دار بل, عل وتزويده الأرضية أخذ, ساعة والمانيا لكل لم. دنو أم ثمّة القوى الأمور, أدنى أعلنت يرتبط أم جعل. العاصمة وبالرغم أن شيء. كل هذه وبداية بالفشل تكتيكاً. جديدة الأجل يتسنّى كلا هو, جدول أمدها كل حول.
          </p>
          <h1 style={{ fontSize: "1.5rem", marginTop: "1.4rem" }}>المخرج - سبيدو</h1>
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