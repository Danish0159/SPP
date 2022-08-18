import React from "react";
import styled from "styled-components";

function AboutNews() {
  return (
    <Wrapper>
      <div className="hero__grid">
        <h2 className="hero__title">
          انضم إلى النشرة الإخبارية لدينا واحصل على خصم 20٪
        </h2>
        <div className="hero__content">
          <p className="hero__paragraph">
            المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
            التفاصيل لتكتشف حقيقة وأساس تلف حقيقة وأساس تلف حقيقة وأساس تلك
            السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default AboutNews;

const Wrapper = styled.section`
  color: var(--clr-black);
  min-height: 50vh;
  padding: 9rem 3rem;
  display: flex;
  align-items: center;
  .hero__grid {
    max-width: 110rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 4rem;
  }
  @media only screen and (max-width: 800px) {
    .hero__grid {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      max-width: 100%;
      grid-gap: 6rem;
    }
  }
  .hero__title {
    font-weight: 800;
    font-size: 3rem;
    letter-spacing: 0.5px;
  }
  .hero__paragraph {
    font-size: 1.7rem;
    line-height: 1.8;
    font-weight: 400;
  }
`;
