import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import signupImage from "../images/signup.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
// import axios from "axios";

const Signup = () => {
  // initial values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  // validation schema
  const validationSchema = yup.object({
    name: yup
      .string("Enter your name")
      .min(3)
      .max(25)
      .required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        resetForm();
        // Api Call Started
        console.log("Before Hitting");
        const responce = await fetch(
          "http://df2b-103-125-176-197.ngrok.io/user/signup/",
          {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH",
            },
          }
        );
        const data = await responce.json();
        console.log("After hitting");
        console.log(data);
        // Api Call Ended.

        // For output etc.
        console.log(JSON.stringify(values));
        console.log(values);
        alert(JSON.stringify(values, null, 2));
        // setSubmitting(false);
      } catch (error) {
        alert(error);
        console.log(error);
        // setSubmitting(false);
        // setErrors(error);
      }
    },
  });

  // const collectData = () => {
  //   console.log("Before hitting");
  //   console.log(name, email, password);

  //   try {
  //     const payloadData = { name, email, password };
  //     const headers = {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods":
  //         "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH",
  //     };

  //     axios
  //       .post(
  //         "http://df2b-103-125-176-197.ngrok.io/user/signup/",
  //         payloadData,
  //         {
  //           headers,
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //     console.log("After hitting");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <Wrapper>
      <div class="signup__grid">
        <figure class="signup__div">
          <img class="signup__img" src={signupImage} alt="SignUp Image" />
        </figure>
        <form onSubmit={formik.handleSubmit} class="signup__form">
          <h2 className="signup__title">Register</h2>

          <div class="form-group">
            <label for="name">Name</label>
            <TextField
              fullWidth
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
            <p className="error-p">
              {formik.touched.name && formik.errors.name}
            </p>
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <TextField
              fullWidth
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <p className="error-p">
              {formik.touched.email && formik.errors.email}
            </p>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <TextField
              fullWidth
              type="password"
              name="password"
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            <p className="error-p">
              {formik.touched.password && formik.errors.password}
            </p>
          </div>

          <div class="form-group">
            <label for="password">Confirm Password</label>
            <TextField
              fullWidth
              type="password"
              name="passwordConfirmation"
              type="password"
              id="passwordConfirmation"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={
                formik.touched.passwordConfirmation &&
                Boolean(formik.errors.passwordConfirmation)
              }
            />
            <p className="error-p">
              {formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation}
            </p>
          </div>

          <button
            type="submit"
            variant="contained"
            className="blue-btn submit-button"
          >
            REGISTER
          </button>

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
  padding: 1rem 3rem 5rem 3rem;
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
  #name,
  #email,
  #password,
  #passwordConfirmation {
    font-family: "Nunito Sans", sans-serif;
    color: #2a2a2a;
    font-size: 1.8rem;
    padding: 12px 14px;
    font-weight: 400;
  }
  .error-p {
    padding: 0px 0px 0px 3px;
    margin: 0px;
    font-size: 15px;
    color: red;
    height: 5px;
  }
`;
