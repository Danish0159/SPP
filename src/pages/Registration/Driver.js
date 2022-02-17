import React, { useState } from "react";
import styled from "styled-components";
import { Button, CircularProgress } from "@mui/material";
import { Navbar, Footer } from "../../components";
import { Formik, Form } from "formik";

import {
  Buttons,
  formInitialValues,
  validationSchema,
  registrationFormModel,
} from "../../components/Registration";

import Category from "./Category";
import Experience from "./Experience";

const { formId, formField } = registrationFormModel;

const steps = [
  "Category",
  "Expertise Level",
  // "Employment History",
  // "Portfolio",
  // "Rate",
  // "Location",
  // "Profile Photo",
  // "Phone Number",
];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Category formField={formField} />;
    case 1:
      return <Experience formField={formField} />;
    case 2:
    // return <Employement />;
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

        <div className="hero">
          <React.Fragment>
            {activeStep === steps.length ? (
              <div>Success</div>
            ) : (
              // <CheckoutSuccess />
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={formId}>
                    {_renderStepContent(activeStep)}

                    <div
                    // className={classes.buttons}
                    >
                      {activeStep !== 0 && (
                        <Button
                          onClick={_handleBack}
                          // className={classes.button}
                        >
                          Back
                        </Button>
                      )}
                      <div
                      // className={classes.wrapper}
                      >
                        <Button
                          // disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          color="primary"
                          // className={classes.button}
                        >
                          {isLastStep ? "Place order" : "Next"}
                        </Button>
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            // className={classes.buttonProgress}
                          />
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </React.Fragment>
        </div>
      </Wrapper>

      <Footer></Footer>
    </main>
  );
};

export default Driver;

const Wrapper = styled.section`
  display: flex;
  max-width: 115rem;
  margin: auto;
  background-color: skyblue;
  min-height: calc(100vh - 100px);
  padding: 2rem 2rem;
  .hero {
    width: 80%;
    background-color: #ffffff;
  }
`;
