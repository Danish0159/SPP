import React from "react";
import styled from "styled-components";
import Image from "../../images/Login.png";

function AboutHero() {
  return (
    <Wrapper>
      <div className="hero__grid">
        <figure className="hero__div">
          <img className="hero__img" src={Image} alt="Hero" />
        </figure>
        <div className="hero__content">
          <h2 className="hero__title">معلومات عنا</h2>
          <p className="hero__paragraph">
            مقاول عبارة عن منصة متخصصة في البناء تم تطويرها لإحداث ثورة في صناعة
            البناء والتشييد. نحن نعمل على ربط الأشخاص الذين يبحثون عن خبراء
            إنشاءات تتراوح من الصيانة إلى المشاريع الضخمة مع الخبراء ذوي التصنيف
            العالي في منطقتهم. من ناحية أخرى ، نقدم منصة حيث يمكن لخبراء الصناعة
            إنشاء محافظهم ومشاركتها مع عملائهم المحتملين.{" "}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default AboutHero;

const Wrapper = styled.section`
  background-color: #424d83;
  padding: 5rem 3rem 5rem 3rem;
  color: #ffffff;
  min-height: 50vh;
  display: flex;
  align-items: center;
  .hero__title {
    font-weight: 700;
    font-size: 3.5rem;
  }
  .hero__grid {
    max-width: 115rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 4rem;
    align-items: center;
    justify-items: center;
  }
  @media only screen and (max-width: 800px) {
    .hero__grid {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      max-width: 100%;
      grid-gap: 6rem;
    }
  }
  .hero__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .hero__content > * {
    margin-bottom: 2rem;
  }
  .hero__paragraph {
    font-size: 1.8rem;
    line-height: 1.6;
    font-weight: 400;
  }
  .hero__div {
    width: 90%;
    height: 100%;
  }
  .hero__img {
    width: 100%;
    display: block;
    height: 100%;
  }
`;
