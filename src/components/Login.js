import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import loginImage from "../images/Login.png";

const Login = () => {
  return (
    <Wrapper>
      <div class="login__grid">
        <figure class="login__div">
          <img class="login__img" src={loginImage} alt="login Image" />
        </figure>

        <form class="login__form">
          <h2 className="login__title">Welcome</h2>
          <p className="login__subTitle">Please login to your account.</p>

          <div class="form-group">
            <label for="name" id="name-label">
              Email Address
            </label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              // required
            />
          </div>

          <div class="form-group">
            <label for="email" id="email-label">
              Password
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              // required
            />
          </div>

          <Link to="/Welcome" type="submit" className="blue-btn submit-button">
            LOGIN
          </Link>

          <p className="login__dont">
            Don’t have an account?{" "}
            <span className="login__register">
              {" "}
              <Link to="/Signup">Register Now</Link>{" "}
            </span>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  background-color: #424d83;
  min-height: calc(100vh - 81px);
  padding: 3rem 3rem 5rem 3rem;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 850px) {
    padding: 3rem 2rem 5rem 2rem;
  }

  .login__grid {
    max-width: 108rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 6rem;
    align-items: center;
  }

  @media only screen and (max-width: 850px) {
    .login__grid {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      max-width: 100%;
      grid-gap: 6rem;
    }
  }
  .login__div {
    width: 90%;
  }
  .login__img {
    width: 100%;
    display: block;
  }
  form {
    background-color: white;
    padding: 2.6rem 6rem;
    border-radius: 20px;
    width: 100%;
    @media only screen and (max-width: 1000px) {
      padding: 2.6rem 4rem;
    }
    @media only screen and (max-width: 850px) {
      padding: 2.6rem 2rem;
    }
  }
  .login__title {
    font-family: "Roboto", sans-serif;
    font-size: 3.6rem;
    font-weight: 900;
    color: var(--clr-black);
    margin-bottom: 0.6rem;
  }
  .login__subTitle {
    font-size: 2rem;
    color: var(--clr-black);
    margin-bottom: 4.5rem;
  }
  label {
    display: flex;
    align-items: center;
    color: #2a2a2a;
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
  .form-group {
    margin: 0 auto 1.25rem auto;
    padding: 0.25rem;
  }
  .form-control {
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0.375rem 0.7rem;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    border: none;
    border-bottom: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .form-control:focus {
    border-color: #80bdff;
    outline: 0;
  }

  .submit-button {
    display: block;
    width: 200px;
  }

  .login__dont {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.8rem;
  }
  .login__register {
    color: var(--clr-blue-2);
  }
`;
