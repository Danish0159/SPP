import React from "react";
import { InputField } from "../../components/Registration";

export default function Employement(props) {
  const {
    formField: { company, location, description },
  } = props;
  return (
    <>
      <p className="card__subtitle">Company/Employeer Name</p>
      <InputField
        name={company.name}
        type="text"
        // label={experience.label}
        fullWidth
      />
      <p className="card__subtitle">Location</p>
      <InputField
        name={location.name}
        type="text"
        // label={projects.label}
        fullWidth
      />
      <p className="card__subtitle">Description</p>
      <InputField
        name={description.name}
        type="text"
        // label={employees.label}
        fullWidth
      />
    </>
  );
}
