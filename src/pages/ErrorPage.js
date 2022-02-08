import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Wrapper>
        <section>
          <h1 className="footer__error">404</h1>
          <h3 className="footer__error">
            Sorry, the page you tried cannot be found
          </h3>
          <Link to="/" className="btn">
            Back Home
          </Link>
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
    font-size: 10rem;
  }
  h3 {
    font-size: 2.5rem;
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

export default ErrorPage;
