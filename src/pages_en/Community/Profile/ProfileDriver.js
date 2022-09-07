import React, { useState } from "react";
import styled from "styled-components";
import { Footer } from "../../../components_en";
import { Buttons } from "../../../components_en/Community/Profile";
import { CardLayout } from '../../../Shared/styled'
import { AddProject, PersonelInfo, PreviewProfile, PersonelProjects } from '../Profile';
import { CardTitle } from '../../../Shared'
import { useSelector } from "react-redux";
import { NavbarCommunity } from '../../../components_en/Navigations'

const ProfileDriver = () => {

  const { user } = useSelector(
    (state) => state.profileEn
  );
  const [step, setStep] = useState(0);

  const steps = [
    "Personel Info",
    "Your Projects",
    "Preview Profile",
    "Add Project",
  ];

  const handleStep = (id) => {
    setStep(id);
  }

  function _renderStepContent(step) {
    switch (step) {
      case 0: return <PersonelInfo></PersonelInfo>
      case 1: return <PersonelProjects handleStep={handleStep} ></PersonelProjects>;
      case 2: return <PreviewProfile></PreviewProfile>;
      case 3: return <AddProject handleStep={handleStep} ></AddProject>
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <main>
      <NavbarCommunity profile={user?.profile.profilePhoto}></NavbarCommunity>
      <CardLayout>
        <Buttons handleStep={handleStep} step={step}></Buttons>
        <Wrapper>
        <CardTitle steps={steps} activeStep={step}>
            </CardTitle>
          <div className="card">
            
            <div className="card__content">
              {_renderStepContent(step)}
            </div>
          </div>
        </Wrapper>
      </CardLayout>
      <Footer></Footer>
    </main>
  );
};

export default ProfileDriver;

const Wrapper = styled.div`
  overflow: hidden;
  box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -webkit-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);
  -moz-box-shadow: -2px 3px 8px 0px rgba(199,185,185,0.75);


  .profile__title {
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.9rem; 
  }
  
  .profile__subtitle {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .profile__avatar {
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .profile__portfolio {
    font-size: 2.3rem;
    font-weight: 700;
    margin: 2.5rem 0rem;
    color: #424d83;
  }
`;