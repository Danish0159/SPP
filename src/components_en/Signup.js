import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import signupImage from "../images/signup.png";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUserEn, reset } from '../features_en/user/userSlice';
import { users } from "../utils/constantsEn";
import { styles } from '../Shared/styles';

const initialState = {
  name: "",
  email: "",
  password: "",
  role: "",
};

const Signup = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, isSuccess, } = useSelector(
    (state) => state.userEn
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = values;
    if (!name || !email || !password || !role) {
      toast.error('Please fill out all fields');
      return;
    }
    if (password.length < 8) {
      toast.error("Password is too short - should be 8 chars minimum.");
      return;
    }
    dispatch(registerUserEn({ name, email, password, role, }));
  };

  useEffect(() => {
    if (isSuccess) {
      history.push("/Login");
      dispatch(reset());
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <div className="signup__grid">
        <figure className="signup__div">
          <img className="signup__img" src={signupImage} alt="SignUp" />
        </figure>
        <form onSubmit={onSubmit} className="signup__form">
          <h2 className="signup__title">Register</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <TextField
              fullWidth
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>
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

          <div className="form-group">
            <label htmlFor="password">Register As</label>
            <FormControl fullWidth>
              <Select
                type="text"
                name="role"
                value={values.role}
                onChange={handleChange}
                sx={styles.select}
              >
                {users.map((user, index) => (
                  <MenuItem
                    sx={styles.menu}
                    key={index} value={user.value_en}>
                    {user.value_en}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <button
            type="submit"
            className="blue-btn submit-button"
          >
            Register
          </button>

          <p className="signup__dont">
            Already have an account?
            <span className="signup__register">
              {" "}
              <Link to="/Login">
                <u>Log In Now</u>
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