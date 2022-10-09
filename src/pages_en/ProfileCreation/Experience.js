import React from "react";
import { InputField } from "../../components_en/ProfileCreation/FormFields";
import { styles } from "../../Shared/Styles";

export default function Experience({ control }) {

  console.log("experience");

  return (
    <div>
      <p className="card__subtitle">Years of experience :</p>
      <InputField name="experience" control={control} type="text" pattern={/^[0-9]*$/} min={0} style={styles.textField} />
      <p className="card__subtitle">Number of projects completed :</p>
      <InputField name="projects" control={control} type="text" pattern={/^[0-9]*$/} min={0} style={styles.textField} />
    </div>
  );
}