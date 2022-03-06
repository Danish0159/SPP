import React from "react";
import { InputField } from "../../components/ProfileCreation/FormFields";

export default function Rate(props) {
  const {
    formField: { rate },
  } = props;
  return (
    <>
      <p className="card__subtitle">Rate Per Project IN USD</p>
      <InputField
        name={rate.name}
        type="number"
        // label={experience.label}
        fullWidth
      />
    </>
  );
}
