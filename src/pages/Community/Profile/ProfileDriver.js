import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar, Footer } from "../../../components";
import { Buttons, CardTitle } from "../../../components/Community/Profile";
import { CardLayout } from '../../../components/styled'
import { AddProject, PreviewProfile, PersonelInfo, PersonelProjects } from '../Profile'

// State.
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser, reset } from "../../../slices/users";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";



const ProfileDriver = () => {
  const [step, setStep] = useState(0);
  // State.
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
    // eslint-disable-next-line
  }, [isError, isSuccess, message, dispatch]);

  // state end.

  const handleStep = (id) => {
    setStep(id);
  }

  useEffect(() => {
    if (step === 0) {
      dispatch(fetchSingleUser("625a8f8722fb3474856dac47"));
    }
    if (step === 1) {
      dispatch(fetchSingleUser("625a8f8722fb3474856dac47"));
      console.log("Second API Call");
    }
    if (step === 2) {
      console.log("Third API Call");
    }
    if (step === 3) {
      console.log("Fourth API Call");
    }
  }, [step])

  function _renderStepContent(step) {
    switch (step) {
      case 0: return <PersonelInfo></PersonelInfo>
      case 1: return <PersonelProjects></PersonelProjects>;
      case 2: return <PreviewProfile></PreviewProfile>;
      case 3: return <AddProject></AddProject>
    }
  }

  if (isLoading) {
    return (
      <div className="section-100vh">
        <Spinner />;
      </div>
    );
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
