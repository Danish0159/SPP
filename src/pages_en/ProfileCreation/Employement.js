import React from "react";
import { InputField } from "../../components_en/ProfileCreation/FormFields";

export default function Employement(props) {
  const {
    formField: { company, location, vision, socialPlatformLink },
  } = props;


  return (
    <>
      <main>
        <p className="card__subtitle">Company/Employeer Name</p>
        <InputField name={company.name} type="text" fullWidth />
        <p className="card__subtitle">Location</p>
        <InputField name={location.name} type="text" fullWidth />
        <p className="card__subtitle">Vision</p>
        <InputField name={vision.name} type="text" fullWidth />
        <p className="card__subtitle">Any Social Platform Link</p>
        <InputField name={socialPlatformLink.name} type="text" fullWidth />
      </main>
    </>
  );
}
