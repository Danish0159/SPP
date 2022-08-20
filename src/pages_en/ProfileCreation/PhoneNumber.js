import React from "react";
import { InputField } from "../../components_en/ProfileCreation/FormFields";

export default function PhoneNumber(props) {
  const {
    formField: { phone },
  } = props;

  return (
    <>
      <p className="card__subtitle">Add your phone number</p>
      <InputField
        name={phone.name}
        type="number"
        fullWidth
      />
      <p className="card__subtitle">
        Your phone number will be shared with clients
      </p>
    </>
  );
}