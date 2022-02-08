import React from "react";
import styled from "styled-components";

const Cards = ({ title, cardsData, bgColor, id }) => {
  return (
    // Global style to bg(index.css)
    <div id={id} className={bgColor}>
      <Wrapper>
        <h3 className="cards__title">{title}</h3>
        <div className="cards__grid">
          {cardsData.map((card) => {
            const { id, photo, line } = card;
            return (
              <div className="cards__div--parent" id={id}>
                <div className="cards__div">
                  <img src={photo} alt="fields" />
                </div>
                <h4 className="cards__div-text">{line}</h4>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Cards;

const Wrapper = styled.section`
  padding: 5rem 4rem;

  .cards__div-text {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--clr-black);
    text-align: center;
    margin-top: 2.2rem;
  }
  .cards__title {
    max-width: 80rem;
    margin: auto;
    text-align: center;
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--clr-black);
    @media only screen and (max-width: 900px) {
      font-size: 3rem;
    }
  }
  .cards__grid {
    max-width: 100rem;
    margin: auto;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-gap: 4rem;
    margin-bottom: 4rem;
    justify-items: center;
  }

  @media only screen and (max-width: 900px) {
    .cards__grid {
      max-width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    }
  }

  @media only screen and (max-width: 500px) {
    .cards__grid {
      max-width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
  }

  .cards__div {
    height: 230px;
    width: 275px;
    border: 2px solid gray;
    border-radius: 38px;
    overflow: hidden;
  }

  .cards__div img {
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
  }
`;
