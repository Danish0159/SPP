import React, { useState } from "react";
import styled from "styled-components";
import { Footer } from "../../../components_en";
import { Buttons } from "../../../components_en/Community/Profile";
import { CardLayout } from '../../../Shared/CardLayout';
import { AddProject, AddBlogPost, AddIdea, PersonelInfo, PersonelProjects, PersonelBlogPosts, PersonelIdeas } from '../Profile';
import { CardTitle } from '../../../Shared'
import { useSelector } from "react-redux";
import { NavbarCommunity } from '../../../components_en/Navigations'

const ProfileDriver = () => {

  const { user } = useSelector(
    (state) => state.profileEn
  );
  const [step, setStep] = useState(0);

  const steps = [
    "Personal Info",
    "Personal Projects",
    "Personal Blog Posts",
    "Personal Ideas",
    "Add Project",
    "Add Blog Post",
    "Add Idea"
  ];

  const handleStep = (id) => {
    setStep(id);
  }

  function _renderStepContent(step) {
    switch (step) {
      case 0: return <PersonelInfo></PersonelInfo>
      case 1: return <PersonelProjects handleStep={handleStep} ></PersonelProjects>;
      case 2: return <PersonelBlogPosts handleStep={handleStep} ></PersonelBlogPosts>;
      case 3: return <PersonelIdeas handleStep={handleStep} ></PersonelIdeas>;
      case 4: return <AddProject handleStep={handleStep} ></AddProject>
      case 5: return <AddBlogPost handleStep={handleStep} ></AddBlogPost>
      case 6: return <AddIdea handleStep={handleStep} ></AddIdea>
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

  .helper {
    font-size: 1.5rem;
  }
`;