import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../images/13.jpg";

const Welcome = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h2 className="hero__title">Welcome on Board</h2>
        <p className="hero__subtitle">
          Find Best Contractor Or Designer In <br /> Your Area
        </p>
        <div className="hero__inputs">
          <form>
            <select className="form-control">
              <option className="option">Looking For</option>
              <option className="option">Car</option>
              <option className="option">Bike</option>
              <option className="option">Scooter</option>
              <option className="option">Cycle</option>
              <option className="option">Horse</option>{" "}
            </select>
          </form>
          <div>
            <input type="text" class="form-control" placeholder="Category" />
          </div>
          <div>
            <input type="text" class="form-control" placeholder="Location" />
          </div>
        </div>
        <Link to="/Results" type="submit" className="blue-btn hero-btn">
          Search
        </Link>
      </div>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.header`
  background-image: linear-gradient(
      rgba(39, 39, 39, 0.5),
      rgba(39, 39, 39, 0.5)
    ),
    url(${image});
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 40px);
  background-size: cover;
  max-width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .hero__title {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    margin-top: -80px;
    margin-bottom: 1.6rem;
    @media only screen and (max-width: 850px) {
      margin-top: 10px;
      margin-bottom: 1rem;
      font-size: 3rem;
    }
  }

  .hero__subtitle {
    font-weight: 600;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5rem;
    @media only screen and (max-width: 850px) {
      font-size: 1.7rem;
      margin-bottom: 2rem;
    }
  }

  .hero__inputs {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 850px) {
      flex-direction: column;
    }
  }

  .form-control {
    width: 170px;
    padding: 1rem 1rem;
    margin: 0rem 0.8rem;
    border: none;
    border-radius: 5px;
    @media only screen and (max-width: 850px) {
      margin: 0.6rem 0rem;
      padding: 0.7rem 0.7rem;
    }
  }
  .form-control:focus {
    outline: none;
  }
  .hero-btn {
    font-size: 2rem;
  }

  .option {
    font-size: 1.4rem;
    font-family: inherit;
  }
`;
