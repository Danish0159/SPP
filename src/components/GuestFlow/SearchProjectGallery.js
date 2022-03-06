import React from "react";
import styled from "styled-components";
import { Reviews, Gallery, BackToProfile } from "../GuestFlow";

const SearchProjectGallery = () => {
  return (
    <Wrapper>
      <BackToProfile></BackToProfile>
      <div className="gallery">
        <h2>Last Page</h2>
        <h1>ProjectDetail</h1>
        <h1>ProjectName</h1>
        <h1>ProjectLocation</h1>
      </div>

      <div className="section__blue">
        <h3 className="section__title">Project Gallery</h3>
        <Gallery></Gallery>
      </div>

      <div className="section__white">
        <h3 className="section__title">Client Review</h3>
        <Reviews></Reviews>
      </div>
    </Wrapper>
  );
};

export default SearchProjectGallery;

const Wrapper = styled.section`
  .gallery {
    text-align: center;
    background-color: green;
    padding: 10rem 0rem;
  }
  .project__btn {
    display: block;
    width: 200px;
  }
  h2 {
    font-size: 5rem;
  }
`;
