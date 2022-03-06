import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Reviews, Gallery, BackToProfile } from "../GuestFlow";

const SearchProjectDetail = () => {
  return (
    <Wrapper>
      <BackToProfile></BackToProfile>
      <div className="project">
        <h1>ProjectDetail</h1>
        <h1>ProjectName</h1>
        <h1>ProjectLocation</h1>
      </div>

      <div className="section__blue">
        <h3 className="section__title">Project Gallery</h3>
        <Gallery></Gallery>
        <Link to="/Gallery" type="submit" className="blue-btn project__btn">
          See More
        </Link>
      </div>

      <div className="section__white">
        <h3 className="section__title">Client Review</h3>
        <Reviews></Reviews>
      </div>
    </Wrapper>
  );
};

export default SearchProjectDetail;
const Wrapper = styled.section`
  .project {
    text-align: center;
    background-color: skyblue;
    padding: 10rem 0rem;
  }
  .project__btn {
    display: block;
    width: 200px;
  }
`;
