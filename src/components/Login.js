import React, { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login, reset } from "../slices/auth";
import loginImage from "../images/Login.png";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { styles } from '../components/Shared/styles';
import { loginInitialValues, loginValidationSchema } from "../utils/helpers"

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  // State.
  const user = JSON.parse(localStorage.getItem("user"));
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      // The Profile Is Already Created For the User.
      if (user && user.profile) {
        history.push("/Profile");
      } else if (user && !user.profile) {
        history.push("/joinus");
      }
    }
    dispatch(reset());
    // eslint-disable-next-line
  }, [user, isError, isSuccess, message, dispatch]);

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      );
      // Reset form
      resetForm();
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <div className="login__grid">
        <figure className="login__div">
          <img className="login__img" src={loginImage} alt="login-img" />
        </figure>

        <form noValidate onSubmit={formik.handleSubmit} className="login__form">
          <h2 className="login__title">{t("login_welcome")}</h2>
          <p className="login__subTitle">{t("login_please")}</p>

          <div className="form-group">
            <label Htmlfor="email">{t("login_email")}</label>
            <TextField
              fullWidth
              type="email"
              name="email"
              id="email"
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
            <label Htmlfor="password">{t("login_password")}</label>
            <TextField
              fullWidth
              type="password"
              name="password"
              id="password"
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

          <button
            type="submit"
            variant="contained"
            className="blue-btn submit-button"
          >
            {t("login_login")}
          </button>
          <p className="login__dont">
            {t("login_don't")}
            <span className="login__register">
              {" "}
              <Link to="/Signup"><u>{t("Register Now")}</u></Link>{" "}
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
  min-height: calc(100vh - 60px);
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
    margin-bottom: 0.5rem;
  }
  .login__subTitle {
    font-size: 2rem;
    color: var(--clr-black);
    margin-bottom: 3.5rem;
  }
  label {
    display: flex;
    align-items: center;
    color: #2a2a2a;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  .form-group {
    margin: 0 auto 1.25rem auto;
    padding: 0.25rem;
  }
  .submit-button {
    display: block;
    width: 200px;
    font-weight: 500;
  }
  .login__dont {
    text-align: center;
    margin-top: 1.8rem;
    font-size: 1.8rem;
  }
  .login__register {
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