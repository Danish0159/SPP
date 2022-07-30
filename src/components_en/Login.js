import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import loginImage from "../images/Login.png";
import { TextField } from "@mui/material";
import { styles } from '../Shared/styles';
import { loginUser } from "../features/user/userSlice";
import { getUserFromLocalStorage } from "../utils/localStorage";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading } = useSelector(
    (state) => state.user
  );
  const user = getUserFromLocalStorage();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = values;
    if (!email || !password) {
      toast.error('Please fill out all fields');
      return;
    }
    if (password.length < 8) {
      toast.error("Password is too short - should be 8 chars minimum.");
      return;
    }
    dispatch(loginUser({ email, password, }));
  };

  useEffect(() => {
    if (user && user.profile) {
      history.push("/Profile");
    } else if (user && !user.profile) {
      history.push("/joinus");
    }
    // eslint-disable-next-line
  }, [user]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <div className="login__grid">
        <figure className="login__div">
          <img className="login__img" src={loginImage} alt="login-img" />
        </figure>

        <form onSubmit={onSubmit} className="login__form">
          <h2 className="login__title">Welcome</h2>
          <p className="login__subTitle">Please login to your account.</p>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <TextField
              fullWidth
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <TextField
              fullWidth
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>

          <button
            type="submit"
            className="blue-btn submit-button"
          >
            LOGIN
          </button>
          <p className="login__dont">
            Don’t have an account?
            <span className="login__register">
              {" "}
              <Link to="/Signup"><u>Register Now</u></Link>{" "}
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