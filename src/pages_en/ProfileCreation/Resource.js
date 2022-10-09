import React from "react";
import { InputField, SelectField } from "../../components_en/ProfileCreation/FormFields";
import { styles } from "../../Shared/Styles";

export default function Resource({ control }) {

  console.log("resource");

  return (
    <div>
      <p className="card__subtitle">Total manpower :</p>
      <InputField name="manpower" control={control} type="text" pattern={/^[0-9]*$/} min={0} style={styles.textField} />
      <p className="card__subtitle">Number of engineers out of total manpower :</p>
      <InputField name="engineers" control={control} type="text" pattern={/^[0-9]*$/} min={0} style={styles.textField} />
      <p className="card__subtitle">Number of work vehicles :</p>
      <InputField name="vehicles" control={control} type="text" pattern={/^[0-9]*$/} min={0} style={styles.textField} />
      <p className="card__subtitle">Workshops :</p>
      <SelectField
        name="workshops"
        control={control}
        data={[
          {
            value_ar: "نعم",
            value_en: "YES"
          },
          {
            value_ar: "لا",
            value_en: "NO"
          },
        ]}
      />
      <p className="card__subtitle">Hire sub-contractors :</p>
      <SelectField
        name="subContractors"
        control={control}
        data={[
          {
            value_ar: "نعم",
            value_en: "YES"
          },
          {
            value_ar: "لا",
            value_en: "NO"
          },
        ]}
      />
    </div>
  );
}