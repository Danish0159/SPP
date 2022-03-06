import React from "react";
import { InputField } from "../../components/ProfileCreation/FormFields";

export default function Location(props) {
  const {
    formField: { country, city },
  } = props;
  return (
    <>
      <p className="card__subtitle">Country</p>
      <InputField
        name={country.name}
        type="text"
        // label={experience.label}
        fullWidth
      />
      <p className="card__subtitle">City</p>
      <InputField
        name={city.name}
        type="text"
        // label={projects.label}
        fullWidth
      />
    </>
  );
}
