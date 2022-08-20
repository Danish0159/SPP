import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { Footer, Spinner } from "../../components_ar";
import { Buttons } from "../../components_ar/ProfileCreation";
import { CardLayout } from '../../Shared/styled';
import { CardTitle } from "../../Shared";
import { NavbarWelcome } from '../../components_ar/Navigations'

// Form Model.
import {
  formInitialValues,
  validationSchema,
  registrationFormModel,
} from "../../components_ar/ProfileCreation/FormModel";
// Pages
import {
  Category,
  ExpertiseLevel,
  About,
  Portfolio,
  Location,
  PhoneNumber,
  ProfilePhoto,
} from "../ProfileCreation";
// redux/state
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { profileCreationAr, reset } from "../../features_ar/profile/profileSlice";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const { formId, formField } = registrationFormModel;

const steps = [
  "فئة",
  "مستوى الخبرة",
  "حول",
  "مَلَفّ",
  "موقع",
  "رقم الهاتف",
  "صورة الملف الشخصي",
];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Category formField={formField} />;
    case 1:
      return <ExpertiseLevel formField={formField} />;
    case 2:
      return <About formField={formField} />;
    case 3:
      return <Portfolio formField={formField} />;
    case 4:
      return <Location formField={formField} />;
    case 5:
      return <PhoneNumber formField={formField} />;
    case 6:
      return <ProfilePhoto formField={formField} />;
    default:
      return <div>لم يتم العثور على</div>;
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
    (state) => state.profileAr
  );

  useEffect(() => {
    if (isSuccess) {
      history.push("/Profilear");
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
          projectLocation: values.projectLocation1,
          projectDescription: values.projectDescription1,
          images: values.images.images1,
        }
      );
    }
    if (values.projectName2) {
      portfolioMapping.push(
        {
          projectName: values.projectName2,
          projectLocation: values.projectLocation2,
          projectDescription: values.projectDescription2,
          images: values.images.images2,
        }
      );
    }
    if (values.projectName3) {
      portfolioMapping.push(
        {
          projectName: values.projectName3,
          projectLocation: values.projectLocation3,
          projectDescription: values.projectDescription3,
          images: values.images.images3,
        }
      );
    }
    if (values.projectName4) {
      portfolioMapping.push(
        {
          projectName: values.projectName4,
          projectLocation: values.projectLocation4,
          projectDescription: values.projectDescription4,
          images: values.images.images4,
        }
      );
    }
    if (values.projectName5) {
      portfolioMapping.push(
        {
          projectName: values.projectName5,
          projectLocation: values.projectLocation5,
          projectDescription: values.projectDescription5,
          images: values.images.images5,
        }
      );
    }
    const user = getUserFromLocalStorage();

    const payload = {
      userId: user.userId,
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
      portfolio: portfolioMapping,
      location_en: {
        country: values.country.value_en,
        city: values.city.map((item) => item.value_en),
      },
      location_ar: {
        country: values.country.value_ar,
        city: values.city.map((item) => item.value_ar),
      },
      phoneNumber: values.phone,
      profilePhoto: values.image.src,

    };

    dispatch(profileCreationAr(payload));
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
              <Redirect to="/ar" />
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
                            خلف
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
                            {isLastStep ? "مكتمل" : "التالي"}
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
  overflow: hidden;
  box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -webkit-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -moz-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);

.error-p{
  font-size: 1.3rem;
  color: red;
  height: 5px;
}

`;