import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {

  const lang = localStorage.getItem("lang");

  return (
    <>
      <Wrapper>
        <section>
          <h1>404</h1>
          {lang === "en" ?(<h3>Sorry, the page you tried cannot be found</h3>):(<h3>عذرا ، الصفحة التي حاولت لا يمكن العثور عليها</h3>) }
          <Link to="/" className="btn">
          {lang === "en" ? "Back Home": "العودة إلى المنزل"}
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
