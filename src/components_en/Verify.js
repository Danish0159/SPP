import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import { useHistory } from "react-router-dom";
import { TextField, Button, InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUserEn, reset } from "../features_en/user/userSlice";
import { styles } from "../Shared/Styles";
import "../utils/firebase";
import { toast } from "react-toastify";
import "../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useFormik } from "formik";
import * as yup from "yup";
import PasswordIcon from "@mui/icons-material/Password";

const schema = yup.object().shape({
  code: yup.string().min(6, "Should Be Exactly 6 Digits").required("Required*"),
});

const Verify = () => {
  const [confirmationResult, setConfirmationResult] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const formValues = JSON.parse(localStorage.getItem("formValues"));

  const { isSuccess, isLoading } = useSelector((state) => state.userEn);

  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
  });

  const getCode = async () => {
    const number = "+92" + formValues.phoneNumber.toString().substring(1);

    const auth = getAuth();

    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
      },
      auth
    );

    const appVerifier = window.recaptchaVerifier;

    try {
      setConfirmationResult(
        await signInWithPhoneNumber(auth, number, appVerifier)
      );
      setShow(true);
    } catch (error) {
      console.log(error);

      toast.error("Some error occurred while sending the code", {
        position: "top-center",
      });
    }

    return;
  };

  const verify = () => {
    confirmationResult
      .confirm(formik.values.code)
      .then(() => {
        dispatch(
          registerUserEn({
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            phoneNumber: formValues.phoneNumber,
            role: formValues.role,
          })
        );
      })
      .catch(() => {
        setLoading(false);
        toast.error("Invalid OTP provided", {
          position: "top-center",
        });
      });
  };

  useEffect(() => {
    getCode();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("formValues");
      dispatch(reset());
      history.push("/Login");
    }
    if (!isLoading) {
      setLoading(false);
    }

    // eslint-disable-next-line
  }, [isSuccess, isLoading]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <div className="verification__grid">
        <h2 className="verification__title">Two Step Verification</h2>
        <p className="verification__subtitle">Enter 6 digit code sent at</p>
        <p className="verification__subtitle">{formValues.phoneNumber}</p>

        <div className="form-group">
          <TextField
            fullWidth
            type="text"
            name="code"
            value={formik.values.code}
            onChange={(e) => {
              let regExp = /^[0-9]*$/;

              if (regExp.test(e.target.value)) {
                formik.handleChange(e);
              } else {
                console.log("Letters are not allowed");
              }
            }}
            onBlur={formik.handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon
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
            inputProps={{
              style: styles.textField,
              maxLength: 6,
            }}
          />
          {formik.touched.code && formik.errors.code ? (
            <p className="error">{formik.errors.code}</p>
          ) : null}
        </div>

        <Button
          className={
            !formik.isValid
              ? "verification__btndisabled"
              : "verification__btnactive"
          }
          variant="contained"
          disabled={!formik.isValid}
          onClick={() => {
            setShow(false);
            setLoading(true);
            verify();
          }}
        >
          Verify
        </Button>

        {show && (
          <p className="resend">
            Didn't get the code?
            <Button
              variant="text"
              className="resend__btn"
              onClick={() => window.location.reload()}
            >
              RESEND
            </Button>
          </p>
        )}

        <div id="recaptcha"></div>
      </div>
    </Wrapper>
  );
};

export default Verify;

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .verification__grid {
    margin: 2rem 0rem;
    border: 1px solid lightgrey;
    padding: 5rem 4rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    .verification__grid {
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

  .verification__title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #424d83;
    text-align: center;
  }

  .verification__subtitle {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin-top: 1rem;
  }

  .verification__btnactive {
    font-size: 1.5rem;
    width: 15rem;
    font-weight: 500;
    color: white;
    background-color: #424d83;
    border-radius: 20px;
  }

  .verification__btndisabled {
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

  .resend {
    margin-top: 1rem;
    font-size: 1.3rem;
    text-align: center;
    font-weight: 600;
  }

  .resend__btn {
    color: blue;
    cursor: pointer;
    border-bottom: 1px solid blue;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
