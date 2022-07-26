import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { Footer, Spinner } from "../../components";
import { Buttons } from "../../components/ProfileCreation";
import { CardLayout } from '../../components/Shared/styled'
import { CardTitle } from "../../components/Shared"
import { NavbarWelcome } from '../../components/Navigations'

// Form Model.
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
import { Redirect, useHistory } from "react-router-dom";
import { profileCreation, reset } from "../../features/profile/profileSlice";
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
  const [portfolioMapping] = useState([]);

  // Redux State.
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isSuccess, } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    if (isSuccess) {
      history.push("/Profile");
      dispatch(reset());
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  async function _submitForm(values, actions) {
    //Optimze the solution.
    if (values.projectName1) {
      portfolioMapping.push(
        {
          projectName: values.projectName1,
          location: values.projectLocation1,
          description: values.projectDescription1,
          images: values.images.images1,
        }
      );
    }
    if (values.projectName2) {
      portfolioMapping.push(
        {
          projectName: values.projectName2,
          location: values.projectLocation2,
          description: values.projectDescription2,
          images: values.images.images2,
        }
      );
    }
    if (values.projectName3) {
      portfolioMapping.push(
        {
          projectName: values.projectName3,
          location: values.projectLocation3,
          description: values.projectDescription3,
          images: values.images.images3,
        }
      );
    }
    if (values.projectName4) {
      portfolioMapping.push(
        {
          projectName: values.projectName4,
          location: values.projectLocation4,
          description: values.projectDescription4,
          images: values.images.images4,
        }
      );
    }
    if (values.projectName5) {
      portfolioMapping.push(
        {
          projectName: values.projectName5,
          location: values.projectLocation5,
          description: values.projectDescription5,
          images: values.images.images5,
        }
      );
    }

    const payload = {
      category: values.Category,
      subCategory: values.subCategory,
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
      portfolio: portfolioMapping,
      location: {
        country: values.Country,
        city: values.City,
      },
      profilePhoto: values.image.src,
    };

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
      <NavbarWelcome></NavbarWelcome>
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
                          <button type="button" className="blue-btn card-btn" onClick={_handleBack}>
                            BACK
                          </button>
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
.error-p{
  font-size: 1.3rem;
  color: red;
  font-family: "Nunito Sans", sans-serif;
  height: 5px;
}
`;