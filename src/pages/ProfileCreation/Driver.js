import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

import { Navbar, Footer, Spinner } from "../../components";
import { Buttons, CardTitle } from "../../components/ProfileCreation";
import { toast } from "react-toastify";

// Form Model
import {
  formInitialValues,
  validationSchema,
  registrationFormModel,
} from "../../components/ProfileCreation/FormModel";

// Pages
import {
  Category,
  Experience,
  Employement,
  Portfolio,
  Rate,
  Location,
  PhoneNumber,
  ProfilePhoto,
} from "../ProfileCreation";

// redux/state
import { useDispatch, useSelector } from "react-redux";
import { profileCreation, reset } from "../../slices/auth";
import { Redirect, useHistory } from "react-router-dom";
import { Button } from "@mui/material";

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
      return <ProfilePhoto formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

const Driver = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  // Redux State.
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
      history.push("/Welcome");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  // function _sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  async function _submitForm(values, actions) {
    // simulate an api call.
    // await _sleep(1000);
    // console.log(JSON.stringify(values, null, 2));

    const payload = {
      category: values.Category,
      expertiseLevel: {
        yearsOfExperience: values.experience,
        noOfProjects: values.projects,
        noOfEmployees: values.employees,
      },
      employmentHistory: [
        {
          companyName: values.company,
          location: values.location,
          description: values.description,
        },
      ],
      portfolio: [
        {
          projectName1: values.projectName1,
          location1: values.projectLocation1,
          images1: values.images.src1,
        },
        {
          projectName2: values.projectName2,
          location2: values.projectLocation2,
          images2: values.images.src2,
        },
        {
          projectName3: values.projectName3,
          location3: values.projectLocation3,
          images3: values.images.src3,
        },
        {
          projectName4: values.projectName4,
          location4: values.projectLocation4,
          images4: values.images.src4,
        },
        {
          projectName5: values.projectName5,
          location5: values.projectLocation5,
          images5: values.images.src5,
        },
      ],
      rate: values.Rate,
      location: {
        country: values.Country,
        city: values.City,
      },
      profilePhoto: values.image.src,
    };

    console.log(payload);
    // dispatch(profileCreation(payload));
    setActiveStep(activeStep + 1);
    actions.setSubmitting(false);
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <Wrapper>
        <Buttons activeStep={activeStep}></Buttons>

        <div className="card">
          {activeStep === steps.length ? (
            // Redirect to the community after the successful registration.
            <Redirect to="/" />
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
                        {/* {isSubmitting && <CircularProgress size={24} />} */}
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
