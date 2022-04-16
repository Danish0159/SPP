import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Footer } from "../../../components";
import { Buttons, CardTitle } from "../../../components/Community";

const ProfileDriver = () => {
  const [step, setStep] = useState(0);

  const handleStep = (id) => {
    setStep(id);
  }

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <h1>Step1</h1>;
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
      <Wrapper>
        <Buttons handleStep={handleStep} step={step}></Buttons>
        <div className="card">
          <CardTitle activeStep={step}>
          </CardTitle>
          <div className="card__content">
            {_renderStepContent(step)}
          </div>
        </div>
      </Wrapper >
      <Footer></Footer>
    </main >
  );
};

export default ProfileDriver;

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
`;