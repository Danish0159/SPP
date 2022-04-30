import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Footer } from "../../../components";
import { Buttons } from "../../../components/Community/Profile";
import { CardLayout } from '../../../components/Common/styled'
import { AddProject, PreviewProfile, PersonelInfo, PersonelProjects } from '../Profile'
import { CardTitle } from '../../../components/Common'
import Spinner from "../../../components/Spinner";

const ProfileDriver = () => {
  const steps = [
    "Personel Info",
    "Your Projects",
    "Preview Profile",
    "Add Project",
  ];

  const [step, setStep] = useState(0);

  const handleStep = (id) => {
    setStep(id);
  }

  function _renderStepContent(step) {
    switch (step) {
      case 0: return <PersonelInfo></PersonelInfo>
      case 1: return <PersonelProjects></PersonelProjects>;
      case 2: return <PreviewProfile></PreviewProfile>;
      case 3: return <AddProject></AddProject>
    }
  }

  return (
    <main>
      <Navbar page="community"></Navbar>
      <CardLayout>
        <Buttons handleStep={handleStep} step={step}></Buttons>
        <Wrapper>
          <div className="card">
            <CardTitle steps={steps} activeStep={step}>
            </CardTitle>
            <div className="card__content">
              {_renderStepContent(step)}
            </div>
          </div>
        </Wrapper>
      </CardLayout>
      <Footer></Footer>
    </main >
  );
};

export default ProfileDriver;

const Wrapper = styled.div`
 .personel__title {
 font-size: 1.7rem;
 font-weight: 600;
 margin-bottom: 0.9rem; 
}
 .personel__subtitle {
 font-size: 1.5rem;
 margin-bottom: 2.5rem;
}
 .preview__title {
   font-size: 2.3rem;
   font-weight:700;
   margin: 2.5rem 0rem;
   color: #424d83;
}
`;
