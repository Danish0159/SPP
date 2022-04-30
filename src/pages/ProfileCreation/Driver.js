import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import { Navbar, Footer, Spinner } from "../../components";
import { Buttons } from "../../components/ProfileCreation";
import { CardLayout } from '../../components/Common/styled'
import { CardTitle } from "../../components/Common"
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
  Location,
  PhoneNumber,
  ProfilePhoto,
} from "../ProfileCreation";
// redux/state
import { useDispatch, useSelector } from "react-redux";
import { logout, profileCreation, reset } from "../../slices/auth";
import { Redirect, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
const { formId, formField } = registrationFormModel;

const steps = [
  "Category",
  "Expertise Level",
  "Employment History",
  "Portfolio",
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
      return <Location formField={formField} />;
    case 5:
      return <PhoneNumber formField={formField} />;
    case 6:
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
      history.push("/HomeFeed");
    }

    dispatch(reset());
    // eslint-disable-next-line
  }, [isError, isSuccess, message, dispatch]);

  async function _submitForm(values, actions) {
    const payload = {
      category: values.Category,
      phoneNumber: values.Phone,
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
          projectName: values.projectName1,
          location: values.projectLocation1,
          images: values.images.src1,
        },
        {
          projectName: values.projectName2,
          location: values.projectLocation2,
          images: values.images.src2,
        },
        {
          projectName: values.projectName3,
          location: values.projectLocation3,
          images: values.images.src3,
        },
        {
          projectName: values.projectName4,
          location: values.projectLocation4,
          images: values.images.src4,
        },
        {
          projectName: values.projectName5,
          location: values.projectLocation5,
          images: values.images.src5,
        },
      ],
      location: {
        country: values.Country,
        city: values.City,
      },
      profilePhoto: values.image.src,
    };

    console.log(payload);
    dispatch(profileCreation(payload));
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
      <CardLayout>
        <Buttons activeStep={activeStep}></Buttons>

        <Wrapper>
          <div className="card">
            {activeStep === steps.length ? (
              <Redirect to="/" />
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={formId}>
                    <CardTitle steps={steps} activeStep={activeStep}></CardTitle>
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
      </CardLayout>
      <Footer></Footer>
    </main>
  );
};

export default Driver;

const Wrapper = styled.section`
  .error-p {
    font-size: 1.3rem;
    color: red;
    font-family: "Nunito Sans", sans-serif;
    height: 5px;
  }
`;
