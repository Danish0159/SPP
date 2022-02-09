import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchResult = () => {
  return (
    <Wrapper>
      <Link to="/Profiles">
        <h2>User1</h2>
        <h2>User2</h2>
        <h2>User3</h2>
        <h2>User4</h2>
        <h2>User5</h2>
        <h2>User6</h2>
        <h2>User1</h2>
        <h2>User1</h2>
        <h2>User1</h2>
        <h2>User1</h2>
        <h2>User1</h2>
        <h2>User1</h2>
        <h2>User1</h2>
        <h2>User1</h2>
        <h2>User1</h2>
      </Link>
    </Wrapper>
  );
};

export default SearchResult;
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
