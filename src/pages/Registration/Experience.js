import React from "react";
import { InputField } from "../../components/Registration";

export default function Experience(props) {
  const {
    formField: { experience, projects, employees },
  } = props;
  return (
    <>
      <InputField name={experience.name} label={experience.label} fullWidth />
      <InputField name={projects.name} label={projects.label} fullWidth />
      <InputField name={employees.name} label={employees.label} fullWidth />
    </>
  );
}
