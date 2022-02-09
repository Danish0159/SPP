import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Reviews, Gallery } from "../components";

const SearchProfile = () => {
  return (
    <Wrapper>
      <div className="profile">
        <h1>Location</h1>
        <h1>Rating</h1>
        <h1>Contact</h1>
        <Link to="/Projects">
          <h1>Total Projects</h1>
        </Link>
      </div>

      <div className="section__blue">
        <h3 className="section__title">Client Reviews</h3>
        <Reviews></Reviews>
      </div>

      <div className="section__white">
        <h3 className="section__title">Projects Gallery</h3>
        <Gallery></Gallery>
      </div>
    </Wrapper>
  );
};

export default SearchProfile;

const Wrapper = styled.section`
  .profile {
    text-align: center;
    background-color: #fffff;
    padding: 10rem 0rem;
  }
`;
