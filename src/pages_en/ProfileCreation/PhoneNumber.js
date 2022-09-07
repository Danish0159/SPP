import React from "react";
import { InputField } from "../../components_en/ProfileCreation/FormFields";
import { styles } from '../../Shared/styles';

export default function PhoneNumber(props) {
  const {
    formField: { phone },
  } = props;


  return (
    <>
      <p className="card__subtitle">Add your phone number</p>
      <InputField
        name={phone.name}
        type="text"
        fullWidth
        style={styles.textField}
      />
      <p className="card__subtitle">
        Your phone number will be shared with clients
      </p>
    </>
  );
}