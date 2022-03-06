import React from "react";
import { InputField } from "../../components/ProfileCreation/FormFields";

export default function Experience(props) {
  const {
    formField: { experience, projects, employees },
  } = props;
  return (
    <>
      <p className="card__subtitle">Years of experience</p>
      <InputField
        name={experience.name}
        type="number"
        // label={experience.label}
        fullWidth
      />
      <p className="card__subtitle">Number of Projects you have done</p>
      <InputField
        name={projects.name}
        type="number"
        // label={projects.label}
        fullWidth
      />
      <p className="card__subtitle">Number of Employees</p>
      <InputField
        name={employees.name}
        type="number"
        // label={employees.label}
        fullWidth
      />
    </>
  );
}
