import React from "react";
import { InputField } from "../../components_ar/ProfileCreation/FormFields";
import { styles } from "../../Shared/Styles";

export default function Experience({ control }) {

  console.log("experience");

  return (
    <div>
      <p className="card__subtitle">سنوات من الخبرة :</p>
      <InputField name="experience" control={control} type="text" pattern={/^[0-9]*$/} min={0} style={styles.textField} />
      <p className="card__subtitle">عدد المشاريع المنجزة :</p>
      <InputField name="projects" control={control} type="text" pattern={/^[0-9]*$/} min={0} style={styles.textField} />
    </div>
  );
}