import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { Footer, Spinner } from "../../components_ar";
import { Buttons } from "../../components_ar/ProfileCreation";
import { CardLayout } from '../../Shared/styled';
import { CardTitle } from "../../Shared";
import { NavbarProfileCreation } from '../../components_en/Navigations';

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
  Location,
  PhoneNumber,
  ProfilePhoto,
} from "../ProfileCreation";
// redux/state
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { profileCreationAr, reset } from "../../features_ar/profile/profileSlice";
import { getUserFromLocalStorage } from "../../utils/localStorage";



const Driver = () => {

  const { formId, formField } = registrationFormModel;

  const steps = [
    "فئة",
    "مستوى الخبرة",
    "حول",
    "موقع",
    "رقم الهاتف",
    "صورة الملف الشخصي",
  ];

  const [check, setCheck] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

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
        return <div>لم يتم العثور على</div>;
    }
  }

  async function _submitForm(values, actions) {

    const user = getUserFromLocalStorage();

    const payload = {
      userId: user.userId,
      role: user.role_ar,
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
      <NavbarProfileCreation></NavbarProfileCreation>
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
                {() => (
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
                        {isLastStep ?
                          <button
                            className="blue-btn card-btn"
                            disabled={check}
                            style={check ? { backgroundColor: "whitesmoke", color: "lightgrey", cursor: "not-allowed" } : null}
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            مكتمل
                          </button>
                          :
                          <button
                            className="blue-btn card-btn"
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            التالي
                          </button>

                        }
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