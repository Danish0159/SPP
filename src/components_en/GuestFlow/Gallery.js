import React from "react";
import styled from "styled-components";

const Gallery = ({ data }) => {
  if (data) {
    return (
      <Wrapper>
        <div className="portfolio__grid">
          {data.map((img, index) => {
            return (
              <div key={index} className="portfolio__div">
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
    margin-bottom: 2rem;
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
    overflow: hidden;
    height: 30rem;
    border: 1px solid blue;
    border-radius: 20px;
    box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -webkit-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -moz-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);

  }
  .portfolio__div img {
    height: 100%;
    width: 100%;
    transition: all 0.3s ease-out;
    cursor: pointer;
    
  }
`;
