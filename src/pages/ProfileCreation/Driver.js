import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import { Navbar, Footer, Spinner } from "../../components";
import { Buttons, CardTitle } from "../../components/ProfileCreation";
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
import { logout, profileCreation, reset } from "../../slices/auth";
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
      dispatch(logout());
      history.push("/");
    }

    dispatch(reset());
    // eslint-disable-next-line
  }, [isError, isSuccess, message, dispatch]);

  async function _submitForm(values, actions) {
    // Uploading Images on Cloudinary.
    // const uploaders = values.images.src1.forEach(async (file) => {
    //   // Initial FormData.
    //   const url = `https://api.cloudinary.com/v1_1/dm1mlee94/upload`;
    //   const formData = new FormData();
    //   formData.append("file", file);
    //   // formData.append("tags", `codeinfuse, medium, gist`);
    //   formData.append("upload_preset", "huarluoc"); // Replace the preset name with your own
    //   formData.append("api_key", "642495779825247"); // Replace API key with your own Cloudinary key
    //   formData.append("timestamp", Date.now() / 1000 || 0);

    //   // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    //   const response = await fetch(url, {
    //     method: "post",
    //     body: formData,
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // });

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
      rate: values.Rate,
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
  #remove-img-btn {
    color: var(--clr-blue-2);
    font-size: 1.3rem;
    display: flex;
    align-items: center;
  }
`;
