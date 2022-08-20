import React from "react";
import { InputField } from "../../components_ar/ProfileCreation/FormFields";

export default function About(props) {
  const {
    formField: { name, about, vision, mission },
  } = props;


  return (
    <>
      <main>
        <p className="card__subtitle">اسم الشركة</p>
        <InputField name={name.name} type="text" limit={15} fullWidth />
        <p className="card__subtitle">عن الشركة</p>
        <InputField name={about.name} type="text" limit={75} fullWidth multiline rows={2} />
        <p className="card__subtitle">رؤية الشركة</p>
        <InputField name={vision.name} type="text" limit={75} fullWidth multiline rows={2} />
        <p className="card__subtitle">مهمة الشركة</p>
        <InputField name={mission.name} type="text" limit={75} fullWidth multiline rows={2} />
      </main>
    </>
  );
}
