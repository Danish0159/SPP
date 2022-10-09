import React from "react";
import { InputField } from "../../components_en/ProfileCreation/FormFields";
import { styles } from "../../Shared/Styles";

export default function Contact({ control }) {

  console.log("Contact");

  return (
    <>
     <p className="card__subtitle">Contact person :</p>
      <InputField name="person" control={control} type="text" limit={50} multiline={true} rows={1} style={styles.desciption} />
      <p className="card__subtitle">Contact number :</p>
      <InputField name="number" control={control} type="tel" limit={10} pattern={/^[0-9]*$/} min={0} minLength={10} style={styles.desciption} />
    </>
  );
}