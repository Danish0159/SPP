import React from "react";
import { InputField } from "../../components_en/ProfileCreation/FormFields";
import { styles } from "../../Shared/Styles";

export default function About({ control }) {

  console.log("about");

  return (
    <div>
      <p className="card__subtitle">Name of the company :</p>
      <InputField name="name" control={control} type="text" limit={50} multiline={true} rows={1} style={styles.desciption} />
      <p className="card__subtitle">Address of the company :</p>
      <InputField name="address" control={control} type="text" multiline={true} rows={1} style={styles.desciption} />
      <p className="card__subtitle">Year of establishment of the company :</p>
      <InputField name="establishmentYear" control={control} type="text" limit={4} pattern={/^[0-9]*$/} min={0} minLength={4} style={styles.textField} />
      <p className="card__subtitle">Registration number of the company :</p>
      <InputField name="registrationNumber" control={control} type="text" multiline={true} rows={1} style={styles.desciption} />
      <p className="card__subtitle">Vision of the company :</p>
      <InputField name="vision" control={control} type="text" limit={200} multiline={true} rows={3} style={styles.desciption} />
      <p className="card__subtitle">Highest monetary value taken in a project by the company :</p>
      <InputField name="highestMonetaryValue" control={control} type="text" multiline={true} rows={1} style={styles.desciption} />
    </div>
  );
}
