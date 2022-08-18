import React from "react";
import { InputField } from "../../components_ar/ProfileCreation/FormFields";

export default function Employement(props) {
  const {
    formField: { company, location, vision, socialPlatformLink },
  } = props;


  return (
    <>
      <main>
        <p className="card__subtitle">اسم الشركة / صاحب العمل</p>
        <InputField name={company.name} type="text" fullWidth />
        <p className="card__subtitle">موقع</p>
        <InputField name={location.name} type="text" fullWidth />
        <p className="card__subtitle">رؤية</p>
        <InputField name={vision.name} type="text" fullWidth />
        <p className="card__subtitle">أي رابط منصة اجتماعية</p>
        <InputField name={socialPlatformLink.name} type="text" fullWidth />
      </main>
    </>
  );
}
