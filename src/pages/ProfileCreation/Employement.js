import React from "react";
import { InputField } from "../../components/ProfileCreation/FormFields";

export default function Employement(props) {
  const {
    formField: { company, location, description },
  } = props;


  return (
    <>
      <main>
        <p className="card__subtitle">Company/Employeer Name</p>
        <InputField name={company.name} type="text" fullWidth />
        <p className="card__subtitle">Location</p>
        <InputField name={location.name} type="text" fullWidth />
        <p className="card__subtitle">Description</p>
        <InputField name={description.name} type="text" fullWidth />
      </main>
    </>
  );
}
