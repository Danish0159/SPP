import React, { useState } from "react";
import styled from "styled-components";
import { Button, CircularProgress } from "@mui/material";
import { Formik, Form } from "formik";

import { Navbar, Footer } from "../../components";
import {
  Buttons,
  formInitialValues,
  validationSchema,
  registrationFormModel,
  CardTitle,
  Success,
} from "../../components/Registration";

import {
  Category,
  Experience,
  Employement,
  Portfolio,
  Rate,
  Location,
  ProfilePhoto,
  PhoneNumber,
} from "../Registration";

const { formId, formField } = registrationFormModel;

const steps = [
  "Category",
  "Expertise Level",
  "Employment History",
  "Portfolio",
  "Rate",
  "Location",
  "Phone Number",
  "Profile Photo",
];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Category formField={formField} />;
    case 1:
      return <Experience formField={formField} />;
    case 2:
      return <Employement formField={formField} />;
    case 3:
      return <Portfolio formField={formField} />;
    case 4:
      return <Rate formField={formField} />;
    case 5:
      return <Location formField={formField} />;
    case 6:
      return <PhoneNumber formField={formField} />;
    case 7:
      return <ProfilePhoto />;
    default:
      return <div>Not Found</div>;
  }
}

const Driver = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    // simulate an api call.
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <Wrapper>
        <Buttons activeStep={activeStep}></Buttons>

        <div className="card">
          {activeStep === steps.length ? (
            <Success></Success>
          ) : (
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId}>
                  <CardTitle activeStep={activeStep}></CardTitle>
                  <div className="card__content">
                    {_renderStepContent(activeStep)}
                    <div className="btn-container">
                      {activeStep !== 0 && (
                        <Button id="mu-btn" onClick={_handleBack}>
                          BACK
                        </Button>
                      )}
                      <div>
                        <button
                          className="blue-btn card-btn"
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          {isLastStep ? "COMPLETE" : "NEXT"}
                        </button>
                        {isSubmitting && <CircularProgress size={24} />}
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </Wrapper>

      <Footer></Footer>
    </main>
  );
};

export default Driver;

const Wrapper = styled.section`
  max-width: 100rem;
  margin: auto;
  min-height: calc(100vh - 100px);
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: 2fr 8fr;
  align-items: center;
  grid-gap: 3rem;
  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  .card {
    box-shadow: 0 0 6px #888;
    min-height: 50vh;
  }
  .card__content {
    padding: 2rem 4rem;
  }
  .card__title {
    background-color: var(--clr-blue-2);
    color: #ffffff;
    padding: 1.2rem 0rem 1.2rem 2rem;
    font-size: 2rem;
  }
  .card__subtitle {
    font-size: 1.8rem;
    margin: 2rem 0rem;
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;
    margin-top: 2rem;
  }
  .card-btn {
    font-size: 1.6rem;
    border-radius: 25px;
    /* OverRiding index.css styling */
    margin: 0.1rem;
    font-weight: 500;
  }

  /* For all the subPages */
  .error-p {
    font-size: 1.3rem;
    color: red;
    font-family: "Nunito Sans", sans-serif;
    height: 5px;
  }

  #Select,
  #Input {
    font-size: 1.3rem;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 700;
  }

  #mu-btn {
    color: var(--clr-blue-2);
    font-size: 1.6rem;
  }
`;
