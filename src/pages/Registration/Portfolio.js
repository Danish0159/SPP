import React from "react";
import { InputField } from "../../components/Registration";

export default function Portfolio(props) {
  const {
    formField: { projectName, projectLocation },
  } = props;
  return (
    <>
      <p className="card__subtitle">Project Name</p>
      <InputField
        name={projectName.name}
        type="text"
        // label={experience.label}
        fullWidth
      />
      <p className="card__subtitle">Location</p>
      <InputField
        name={projectLocation.name}
        type="text"
        // label={projects.label}
        fullWidth
      />
    </>
  );
}
