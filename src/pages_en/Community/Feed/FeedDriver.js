import React, { useState } from "react";
import { NavbarCommunity } from "../../../components_en/Navigations";
import {
  HomeFeed,
  Communities,
  EnrolledCourses,
  CreateCommunity,
  FeedNav,
} from "../Feed";

const FeedDriver = () => {
  const [step, setStep] = useState(0);

  const handleStep = (id) => {
    setStep(id);
  };

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <HomeFeed></HomeFeed>;
      case 1:
        return <Communities></Communities>;
      case 2:
        return <CreateCommunity></CreateCommunity>;
      case 3:
        return <EnrolledCourses></EnrolledCourses>;
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <main>
      <NavbarCommunity></NavbarCommunity>
      <FeedNav handleStep={handleStep}></FeedNav>
      <div>
        <div className="card__content">{_renderStepContent(step)}</div>
      </div>
    </main>
  );
};

export default FeedDriver;
