import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchProject = () => {
  return (
    <Wrapper>
      <Link to="/Details">
        <h2>Project1</h2>
        <h2>Project2</h2>
        <h2>Project3</h2>
        <h2>Project4</h2>
        <h2>Project5</h2>
        <h2>Project6</h2>
        <h2>Project1</h2>
        <h2>Project1</h2>
        <h2>Project1</h2>
        <h2>Project1</h2>
        <h2>Project1</h2>
        <h2>Project1</h2>
        <h2>Project1</h2>
        <h2>Project1</h2>
        <h2>Project1</h2>{" "}
      </Link>
    </Wrapper>
  );
};

export default SearchProject;

const Wrapper = styled.section`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
  }
`;
