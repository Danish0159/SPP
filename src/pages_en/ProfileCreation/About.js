import React from "react";
import { InputField } from "../../components_en/ProfileCreation/FormFields";
import { styles } from "../../Shared/styles";

export default function About(props) {
  const {
    formField: { name, about, vision, mission},
  } = props;


  return (
      <main>
        <p className="card__subtitle">Company Name</p>
        <InputField name={name.name} type="text" limit={50} fullWidth  multiline rows={1}  style={styles.desciption} />
        <p className="card__subtitle">About Company</p>
        <InputField name={about.name} type="text" limit={200} fullWidth multiline rows={3} style={styles.desciption} />
        <p className="card__subtitle">Company Vision</p>
        <InputField name={vision.name} type="text" limit={200} fullWidth multiline rows={3} style={styles.desciption} />
        <p className="card__subtitle">Company Mission</p>
        <InputField name={mission.name} type="text" limit={200} fullWidth multiline rows={3} style={styles.desciption} />
      </main>
  );
}
