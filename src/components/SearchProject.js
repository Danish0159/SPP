import React from "react";
import styled from "styled-components";
import { BackToProfile, Table } from "../components";
import jsonData from "../MOCK_DATA.json";

const SearchProject = () => {
  return (
    <Wrapper>
      <BackToProfile></BackToProfile>
      <Table
        jsonData={jsonData}
        title="Projects Completed"
        link="/Details"
      ></Table>
      ;
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
