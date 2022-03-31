import React from "react";
import styled from "styled-components";

const Gallery = ({ data }) => {
  if (data) {
    return (
      <Wrapper>
        <div className="portfolio__grid">
          {data.map((img, index) => {
            return (
              <div key={index} class="portfolio__div">
                <img src={img} alt="fields" />
              </div>
            );
          })}
        </div>
      </Wrapper>
    );
  }
  return null;
};

export default Gallery;

const Wrapper = styled.section`
  .portfolio__grid {
    max-width: 110rem;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
  @media only screen and (max-width: 900px) {
    .portfolio__grid {
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 500px) {
    .portfolio__grid {
      max-width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
  }
  .portfolio__div {
    height: 250px;
    overflow: hidden;
  }
  .portfolio__div img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
  @media only screen and (max-width: 900px) {
    .portfolio__div img {
      height: 85%;
    }
  }
`;
