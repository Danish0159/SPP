import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {

  // State.
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  // If user is already logedIN and trying to access the homePage, Redirect him to HomeFeed Page.
  if (user && user.profile) {
    history.push("/HomeFeed");
  }
  else if (user && !user.profile) {
    history.push("/joinus");
  }
  else {
    history.push("/");
  }

  return (
    <>
      <Wrapper>
        <section>
          <h1>COMMING SOON</h1>
          <h3>Maqawal.com</h3>
          {/* <Link to="/" className="btn">
            Back Home
          </Link> */}
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  background-color: var(--clr-blue-2);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: white;
  text-align: center;
  padding: 0rem 3rem;
  h1 {
    font-size: 7rem;
  }
  h3 {
    font-size: 4rem;
    margin-bottom: 5rem;
  }
  .btn {
    color: white;
    padding: 1rem 1rem;
    font-size: 2rem;
    border: 1px solid white;
    margin-top: 5rem;
  }
`;

export default HomePage;


