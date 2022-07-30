import React from "react";
import { InputField, InputFieldSetConditional } from "../../components_ar/ProfileCreation/FormFields";

export default function Experience(props) {
  const {
    formField: { experience, projects, employees },
  } = props;


  return (
    <>
      <p className="card__subtitle">سنوات من الخبرة</p>
      <InputField name={experience.name} type="number" min={0} fullWidth />
      <p className="card__subtitle">عدد المشاريع التي أنجزتها</p>
      <InputFieldSetConditional name={projects.name} type="number" fullWidth />
      <p className="card__subtitle">عدد الموظفين</p>
      <InputField name={employees.name} type="number" min={1} fullWidth />
    </>
  );
}