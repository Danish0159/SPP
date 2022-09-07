import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { Footer, Spinner } from "../../components_en";
import { Buttons } from "../../components_en/ProfileCreation";
import { CardLayout } from '../../Shared/styled';
import { CardTitle } from "../../Shared";
import { NavbarProfileCreation } from '../../components_en/Navigations';

// Form Model.
import {
  formInitialValues,
  validationSchema,
  registrationFormModel,
} from "../../components_en/ProfileCreation/FormModel";
// Pages
import {
  Category,
  ExpertiseLevel,
  About,
  Location,
  PhoneNumber,
  ProfilePhoto,
} from "../ProfileCreation";
// redux/state
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { profileCreationEn, reset } from "../../features_en/profile/profileSlice";
import { getUserFromLocalStorage } from "../../utils/localStorage";




const Driver = () => {

  const { formId, formField } = registrationFormModel;

  const steps = [
    "Category",
    "Expertise Level",
    "About",
    "Location",
    "Phone Number",
    "Profile Photo",
  ];

  const [check, setCheck] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  // Redux State.
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isSuccess, } = useSelector(
    (state) => state.profileEn
  );

  useEffect(() => {
    if (isSuccess) {
      history.push("/Profile");
      dispatch(reset());
    }
    // eslint-disable-next-line
  }, [isSuccess, history]);


  function _renderStepContent(step) {

    switch (step) {
      case 0:
        return <Category formField={formField} />;
      case 1:
        return <ExpertiseLevel formField={formField} />;
      case 2:
        return <About formField={formField} />;
      case 3:
        return <Location formField={formField} />;
      case 4:
        return <PhoneNumber formField={formField} />;
      case 5:
        return <ProfilePhoto formField={formField} setCheck={setCheck} />;
      default:
        return <div>Not Found</div>;
    }
  }

  async function _submitForm(values, actions) {

    const user = getUserFromLocalStorage();

    const payload = {
      userId: user.userId,
      role: user.role_en,
      category_en: values.category.value_en,
      category_ar: values.category.value_ar,
      subCategory_en: values.subCategory.value_en,
      subCategory_ar: values.subCategory.value_ar,
      expertiseLevel: {
        yearsOfExperience: values.experience,
        noOfProjects: values.projects,
        noOfEmployees: values.employees,
      },
      about: {
        companyName: values.name,
        companyAbout: values.about,
        companyVision: values.vision,
        companyMission: values.mission,
      },
      location_en: {
        country: values.country.value_en,
        city: values.city.map((item) => item.value_en),
      },
      location_ar: {
        country: values.country.value_ar,
        city: values.city.map((item) => item.value_ar),
      },
      phoneNumber: values.phone,
      profilePhoto: values.image,

    };

    dispatch(profileCreationEn(payload));
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
      <NavbarProfileCreation></NavbarProfileCreation>
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
                {() => (
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
                        {isLastStep ?
                          <button
                            className="blue-btn card-btn"
                            disabled={check}
                            style={check ? { backgroundColor: "whitesmoke", color: "lightgrey", cursor: "not-allowed" } : null}
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            COMPLETE
                          </button>
                          :
                          <button
                            className="blue-btn card-btn"
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            NEXT
                          </button>

                        }
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
    </main >
  );
};

export default Driver;

const Wrapper = styled.section`
  overflow: hidden;
  box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -webkit-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -moz-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);

.error-p{
  font-size: 1.1rem;
  color: red;
  margin-top: 5px;
}
`;