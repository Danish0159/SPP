import React, { useState, useEffect } from "react";
import { Footer } from "../../components_ar";
import { Buttons } from "../../components_ar/ProfileCreation";
import { NavbarProfileCreation } from '../../components_ar/Navigations';
import { Spinner } from "../../components_ar";
import styled from "styled-components";
import { CardLayout } from '../../Shared/CardLayout';
import { CardTitle } from "../../Shared";
import { subCategories, categories, roles, regions } from "../../utils/constantsAr";

// Pages
import {
  About,
  Experience,
  Resource,
  Service,
  Contact,
  Photo,
} from "../ProfileCreation";

// Redux/State
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { profileCreationAr, reset } from "../../features_ar/profile/profileSlice";
import { getUserFromLocalStorage } from "../../utils/localStorage";

// React-Hook-Form/Form
import { useForm } from "react-hook-form";

const Driver = () => {

  const steps = [
    "حول",
    "خبرة",
    "الموارد",
    "خدمة",
    "اتصال",
    "صورة",
  ];

  const { handleSubmit, control } = useForm();

  const [check, setCheck] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  // Redux State.
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isSuccess, } = useSelector(
    (state) => state.profileAr
  );

  function _renderStepContent(step) {

    switch (step) {
      case 0:
        return <About control={control} />;
      case 1:
        return <Experience control={control} />;
      case 2:
        return <Resource control={control} />;
      case 3:
        return <Service control={control} />;
      case 4:
        return <Contact control={control} />;
      case 5:
        return <Photo control={control} setCheck={setCheck} />;
      default:
        return <div>لم يتم العثور على</div>;
    }
  }

  function _submitForm(values) {

    const user = getUserFromLocalStorage();
    const role = roles.find(item => item.value_ar === user.role_ar);
    const category = categories[role.value_ar].find(item => item.value_ar === values.category);
    const subCategory = subCategories[role.value_ar][category.value_ar].find(item => item.value_ar === values.subCategory);
    const region = regions.find(item => item.value_ar === values.region);

    const payload = {
      userId: user.userId,
      about: {
        name: values.name,
        address: values.address,
        establishmentYear: values.establishmentYear,
        registrationNumber: values.registrationNumber,
        vision: values.vision,
        highestMonetaryValue: values.highestMonetaryValue
      },
      experience: {
        experience: values.experience,
        projects: values.projects
      },
      resource: {
        manpower: values.manpower,
        engineers: values.engineers,
        vehicles: values.vehicles,
        workshops: values.workshops,
        subContractors: values.subContractors
      },
      service_en: {
        role: role.value_en,
        category: category.value_en,
        subCategory: subCategory.value_en,
        region: region.value_en,
        city: values.city.map((item) => item.value_en),
      },
      service_ar: {
        role: role.value_ar,
        category: category.value_ar,
        subCategory: subCategory.value_ar,
        region: region.value_ar,
        city: values.city.map((item) => item.value_ar),
      },
      contact: {
        person: values.person,
        number: values.number
      },
      photo: values.image,
    };

    dispatch(profileCreationAr(payload));
    setActiveStep(activeStep + 1);
  }

  function onSubmit(values) {
    if (isLastStep) {
      _submitForm(values);
    } else {
      setActiveStep(activeStep + 1);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  useEffect(() => {
    if (isSuccess) {
      history.push("/Profilear");
      dispatch(reset());
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  if (isLoading) {
    return (
      <>
        <NavbarProfileCreation></NavbarProfileCreation>
        <div className="section-100vh">
          <Spinner />
        </div>
      </>
    );
  }

  console.log("Driver");

  return (
    <>
      <NavbarProfileCreation></NavbarProfileCreation>
      <CardLayout>
        <Buttons activeStep={activeStep}></Buttons>
        <Wrapper>
          <div className="card">
            {activeStep === steps.length ? (
              <Redirect to="/ar" />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardTitle steps={steps} activeStep={activeStep}></CardTitle>
                <div className="card__content">
                  {_renderStepContent(activeStep)}
                  <div className="btn-container">
                    {activeStep !== 0 && (
                      <button type="button" className="blue-btn card-btn" onClick={_handleBack}>
                        الى الخلف
                      </button>
                    )}
                    {isLastStep ?
                      <button
                        className="blue-btn card-btn"
                        disabled={check}
                        style={check ? { backgroundColor: "whitesmoke", color: "lightgrey", cursor: "not-allowed" } : null}
                        type="submit"
                      >
                        مكتمل
                      </button>
                      :
                      <button
                        className="blue-btn card-btn"
                        type="submit"
                      >
                       التالي
                      </button>
                    }
                  </div>
                </div>
              </form>
            )}
          </div>
        </Wrapper>
      </CardLayout>
      <Footer></Footer>
    </>
  );
};

export default Driver;

const Wrapper = styled.section`
  overflow: hidden;
  box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -webkit-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -moz-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);

  .error {
    font-size: 1.3rem;
    color: red;
    margin-top: 8px;
    float: right;
  }
  
  .helper {
    font-size: 1.5rem;
    float: right;
  }

  .info {
    font-size: 1.3rem;
    color: blue;
    margin-top: 8px;
    float: right;
  }

`;