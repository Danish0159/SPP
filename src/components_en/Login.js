import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { TextField, Button, InputAdornment } from "@mui/material";
import { styles } from '../Shared/Styles';
import { useFormik } from "formik";
import * as yup from "yup";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { loginUserEn } from '../features_en/user/userSlice';
import { getUserFromLocalStorage } from "../utils/localStorage";

const schema = yup.object().shape({
  email: yup.string().email('Invalid Email Format').required('Required*'),
  password: yup.string().required('Required*'),
});

const Signin = () => {

  const user = getUserFromLocalStorage();

  const { isLoading } = useSelector(
    (state) => state.userEn
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
  });

  const onSignInSubmit = () => {

    dispatch(loginUserEn({ email: formik.values.email, password: formik.values.password }));

  };

  useEffect(() => {
    if (user && user.profile) {
      history.push("/Profile");
    } else if (user && !user.profile) {
      history.push("/Joinus");
    }
    // eslint-disable-next-line
  }, [user]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <div className="signin__grid">

        <h2 className="signin__title" >Sign In</h2>

        <div className="form-group">
          <label htmlFor="name">Email Address</label>
          <TextField
            fullWidth
            autoComplete="off"
            type="text"
            name="email"
            placeholder="e.g., example@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{
              style: styles.textField,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "blue", fontSize: "3.5rem", borderRight: "1px solid grey", paddingRight: "10px" }} />
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.email && formik.errors.email ? <p className="error">{formik.errors.email}</p> : null}
        </div>

        <div className="form-group">
          <label htmlFor="name">Password</label>
          <TextField
            fullWidth
            autoComplete="off"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{
              style: styles.textField,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon sx={{ color: "blue", fontSize: "3.5rem", borderRight: "1px solid grey", paddingRight: "10px" }} />
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.password && formik.errors.password ? <p className="error">{formik.errors.password}</p> : null}
        </div>

        <Button
          className={!formik.isValid ? "signin__btndisabled" : "signin__btnactive"}
          variant="contained"
          disabled={!formik.isValid}
          onClick={onSignInSubmit}
        >
          Log In
        </Button>

      </div>

    </Wrapper>
  );
};

export default Signin;

const Wrapper = styled.section`

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .signin__grid {
    margin: 2rem 0rem;
    border: 1px solid lightgrey;
    padding: 1rem 2rem 4rem 2rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    .signin__grid {
      border: none;
      border-radius: 0px;
    }
  }

  .form-group {
    margin: 2rem;
    width: 100%;
  }

  .form-group label {
    font-size: 1.5rem;
    font-weight: 400;
    color: "#2a2a2a"
  }

  .signin__title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #424d83;
    text-align: center;
  }

  .signin__btnactive {
    font-size: 1.5rem;
    width: 15rem;
    font-weight: 500;
    color: white;
    background-color: #424d83;
    border-radius: 20px;
  }

  .signin__btndisabled {
    font-size: 1.5rem;
    width: 15rem;
    font-weight: 900;
    color: grey;
    background-color: whitesmoke;
    border-radius: 20px;
  }

  .error {
    margin-top: 0.5rem;
    color: red;
  }
 
`;