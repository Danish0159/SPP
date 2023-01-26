import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MenuItem, TextField, Button, InputAdornment } from "@mui/material";
import { roles } from "../utils/constantsEn";
import { styles } from "../Shared/Styles";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PhoneIcon from "@mui/icons-material/Phone";
import Spinner from "./Spinner";

const schema = yup.object().shape({
  name: yup.string().required("Required*"),
  email: yup.string().email("Invalid Email Format").required("Required*"),
  password: yup
    .string()
    .min(8, "Too Short - Should Be 8 Chars Minimum")
    .required("Required*"),
  role: yup.string().required("Required*"),
  phoneNumber: yup
    .string()
    .min(11, "Should Be Exactly 10 Digits")
    .required("Required*"),
});

const Signup = () => {
  const formValues = JSON.parse(localStorage.getItem("formValues"));

  const [emailExist, setEmailExist] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  let initialValues;

  if (formValues) {
    initialValues = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      role: formValues.role,
      phoneNumber: formValues.phoneNumber,
    };
  } else {
    initialValues = {
      name: "",
      email: "",
      password: "",
      role: "",
      phoneNumber: "",
    };
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
  });

  const onSignUpSubmit = () => {
    localStorage.setItem("formValues", JSON.stringify(formik.values));

    history.push("/Verify");
  };

  if (loading) {
    return <Spinner />;
  }

  console.log("hello");

  return (
    <Wrapper>
      <div className="signup__grid">
        <h2 className="signup__title">Sign Up</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <TextField
            fullWidth
            autoComplete="off"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{
              style: styles.textField,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon
                    sx={{
                      color: "blue",
                      fontSize: "3.5rem",
                      borderRight: "1px solid grey",
                      paddingRight: "10px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="name">Email Address</label>
          <TextField
            fullWidth
            autoComplete="off"
            type="text"
            name="email"
            placeholder="e.g., example@gmail.com"
            value={formik.values.email}
            onChange={(e) => {
              if (emailExist) {
                setEmailExist(false);
              }
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            inputProps={{
              style: styles.textField,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon
                    sx={{
                      color: "blue",
                      fontSize: "3.5rem",
                      borderRight: "1px solid grey",
                      paddingRight: "10px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
          {emailExist && (
            <p className="error emailexists">Email already exists</p>
          )}
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
                  <KeyIcon
                    sx={{
                      color: "blue",
                      fontSize: "3.5rem",
                      borderRight: "1px solid grey",
                      paddingRight: "10px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="name">Service Role</label>
          <TextField
            fullWidth
            select
            autoComplete="off"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            SelectProps={{
              style: {
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#2a2a2a",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MiscellaneousServicesIcon
                    sx={{
                      color: "blue",
                      fontSize: "3.5rem",
                      borderRight: "1px solid grey",
                      paddingRight: "10px",
                      marginRight: "15px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          >
            {roles.map((role, index) => (
              <MenuItem sx={styles.menu} key={index} value={role.value_en}>
                {role.value_en}
              </MenuItem>
            ))}
          </TextField>
          {formik.touched.role && formik.errors.role ? (
            <p className="error">{formik.errors.role}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="name">Phone Number</label>
          <TextField
            fullWidth
            autoComplete="off"
            type="tel"
            name="phoneNumber"
            placeholder="e.g., 0523451759"
            value={formik.values.phoneNumber}
            onChange={(e) => {
              let regExp = /^[0-9]*$/;

              if (regExp.test(e.target.value)) {
                formik.handleChange(e);
              } else {
                console.log("Only numbers are allowed");
              }
            }}
            onBlur={formik.handleBlur}
            inputProps={{
              style: styles.textField,
              maxLength: 11,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon
                    sx={{
                      color: "blue",
                      fontSize: "3.5rem",
                      borderRight: "1px solid grey",
                      paddingRight: "10px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className="error">{formik.errors.phoneNumber}</p>
          ) : null}
        </div>

        <Button
          className={
            !formik.isValid ? "signup__btndisabled" : "signup__btnactive"
          }
          variant="contained"
          disabled={!formik.isValid}
          onClick={() => {
            setLoading(true);
            axios
              .post("https://sspbackend.onrender.com/api/user/checkemail", {
                email: formik.values.email,
              })
              .then((response) => {
                if (response.data.status === "FAILED") {
                  setLoading(false);
                  setEmailExist(true);
                } else if (response.data.status === "SUCCESS") {
                  setLoading(false);
                  onSignUpSubmit();
                }
              });
          }}
        >
          Register
        </Button>
      </div>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .signup__grid {
    margin: 2rem 0rem;
    border: 1px solid lightgrey;
    padding: 1rem 2rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    .signup__grid {
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
    color: "#2a2a2a";
  }

  .signup__title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #424d83;
    text-align: center;
  }

  .signup__btnactive {
    font-size: 1.5rem;
    width: 15rem;
    font-weight: 500;
    color: white;
    background-color: #424d83;
    border-radius: 20px;
  }

  .signup__btndisabled {
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

  .error emailexists {
    margin-top: 0.5rem;
    color: blue;
  }
`;
