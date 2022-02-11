import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import signupImage from "../images/signup.png";
const axios = require("axios");

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async () => {
    console.log("Before hitting");
    console.log(name, email, password);

    // Proxy
    // https://cors-anywhere.herokuapp.com/
    const result = await fetch(
      "http://df2b-103-125-176-197.ngrok.io/user/signup/",
      {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await result.json();
    console.log("After hitting");
    console.log(data);
  };

  return (
    <Wrapper>
      <div class="signup__grid">
        <figure class="signup__div">
          <img class="signup__img" src={signupImage} alt="SignUp Image" />
        </figure>
        <form class="signup__form">
          <h2 className="signup__title">Register</h2>

          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="form-control"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              required
            />
          </div>

          <a
            onClick={collectData}
            type="submit"
            className="blue-btn submit-button"
          >
            REGISTER
          </a>

          <p className="signup__dont">
            Already have an account?{" "}
            <span className="signup__register">
              {" "}
              <Link to="/Login">Log In Now</Link>{" "}
            </span>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.section`
  background-color: #424d83;
  min-height: calc(100vh - 81px);
  padding: 1rem 3rem 1rem 3rem;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 850px) {
    padding: 3rem 2rem 5rem 2rem;
  }

  .signup__grid {
    max-width: 108rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 6rem;
    align-items: center;
  }

  @media only screen and (max-width: 850px) {
    .signup__grid {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      max-width: 100%;
      grid-gap: 6rem;
    }
  }
  .signup__div {
    width: 90%;
  }
  .signup__img {
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
  .signup__title {
    font-family: "Roboto", sans-serif;
    font-size: 3.6rem;
    font-weight: 900;
    color: var(--clr-black);
    margin-bottom: 2rem;
  }

  label {
    display: flex;
    align-items: center;
    color: #2a2a2a;
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
  }
  .form-group {
    margin: 0 auto 1.25rem auto;
    padding: 0.25rem;
  }
  .form-control {
    display: block;
    width: 100%;
    height: 2.5rem;
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
  .signup__dont {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.8rem;
  }
  .signup__register {
    color: var(--clr-blue-2);
  }
`;
