import React from "react";
import { InputField, InputFieldSetConditional } from "../../components_en/ProfileCreation/FormFields";

export default function Experience(props) {
  const {
    formField: { experience, projects, employees },
  } = props;


  return (
    <>
      <p className="card__subtitle">Years of experience</p>
      <InputField name={experience.name} type="number" min={0} fullWidth />
      <p className="card__subtitle">Number of Projects you have done</p>
      <InputFieldSetConditional name={projects.name} type="number" fullWidth />
      <p className="card__subtitle">Number of Employees</p>
      <InputField name={employees.name} type="number" min={1} fullWidth />
    </>
  );
}