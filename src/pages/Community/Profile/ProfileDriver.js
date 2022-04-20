import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar, Footer } from "../../../components";
import { Buttons, CardTitle } from "../../../components/Community/Profile";
import { CardLayout } from '../../../components/styled'

const ProfileDriver = () => {
  const [step, setStep] = useState(0);

  const handleStep = (id) => {
    if (id === 0) {
      console.log("First Call");
    }
    if (id === 1) {
      console.log("Second Call");
    }
    if (id === 2) {
      console.log("Third Call");
    }
    if (id === 3) {
      console.log("Fourth Call");
    }
  }

  useEffect(() => {
    console.log("Default First API Call");
  }, [])


  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <div>
          <p className="personel__title">Name</p>
          <p className="personel__subtitle">Jhon Doe</p>
          <p className="personel__title">Email</p>
          <p className="personel__subtitle">JhonDoe@gmail.com</p>
          <p className="personel__title">Role</p>
          <p className="personel__subtitle">Contractor</p>
          <p className="personel__title">Number</p>
          <p className="personel__subtitle">123423232324</p>
        </div>;
      case 1:
        return <h1>Step2</h1>;
      case 2:
        return <h1>Step3</h1>;
      case 3:
        return <h1>Step4</h1>;
    }
  }

  return (
    <main>
      <Navbar page="community"></Navbar>
      <CardLayout>
        <Buttons handleStep={handleStep} step={step}></Buttons>
        <Wrapper>
          <div className="card">
            <CardTitle activeStep={step}>
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
.personel__title{
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 0.9rem;
}
.personel__subtitle{
  font-size: 1.5rem;
   margin-bottom: 2.5rem;
}
`;