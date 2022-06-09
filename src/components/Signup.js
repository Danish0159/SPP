import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import signupImage from "../images/signup.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../slices/auth";
import { users } from "../utils/constants";
import { styles } from '../styles';

const Signup = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
      history.push("/Login");
    }

    dispatch(reset());
    // eslint-disable-next-line
  }, [user, isError, isSuccess, message, dispatch]);

  // Role
  const [role, setRole] = useState("");
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  // initial values.
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // validation schema.
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
      .min(8, "Password is too short - should be 8 chars minimum.")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    // async keyword can be removed from here.
    onSubmit: (values, { resetForm }) => {
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
          role,
        })
      );
      // Reset form.
      setRole("");
      resetForm();
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <div class="signup__grid">
        <figure class="signup__div">
          <img class="signup__img" src={signupImage} alt="SignUp" />
        </figure>
        <form onSubmit={formik.handleSubmit} class="signup__form">
          <h2 className="signup__title">{t("register_title")}</h2>
          <div class="form-group">
            <label Htmlfor="name">{t("register_name")}</label>
            <TextField
              fullWidth
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              inputProps={{
                style: styles.textField,
              }}
            />
            <p className="error-p">
              {formik.touched.name && formik.errors.name}
            </p>
          </div>

          <div class="form-group">
            <label Htmlfor="email">{t("register_email")}</label>
            <TextField
              fullWidth
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              inputProps={{
                style: styles.textField,
              }}
            />
            <p className="error-p">
              {formik.touched.email && formik.errors.email}
            </p>
          </div>

          <div className="form-group">
            <label Htmlfor="password">{t("register_password")}</label>
            <TextField
              fullWidth
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              inputProps={{
                style: styles.textField,
              }}
            />
            <p className="error-p">
              {formik.touched.password && formik.errors.password}
            </p>
          </div>

          <div className="form-group">
            <label Htmlfor="password">{t("register_as")}</label>
            <FormControl fullWidth>
              <Select
                sx={styles.select}
                value={role}
                onChange={handleChange}
                required
              >
                {users.map((user, index) => (
                  <MenuItem
                    sx={styles.menu}
                    key={index} value={user.value}>
                    {user.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <button
            type="submit"
            variant="contained"
            className="blue-btn submit-button"
          >
            {t("register_register")}
          </button>

          <p className="signup__dont">
            {t("register_already")}
            <span className="signup__register">
              {" "}
              <Link to="/Login">
                {t("register_login")}
              </Link>{" "}
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
    font-weight: 500;
  }
  .signup__dont {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.8rem;
  }
  .signup__register {
    color: var(--clr-blue-2);
  }
  
  .error-p {
    padding: 0px 0px 0px 3px;
    margin: 0px;
    font-size: 15px;
    color: red;
    height: 5px;
  }
`;
