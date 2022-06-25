import React from "react";
import { InputField, InputFieldSetConditional } from "../../components/ProfileCreation/FormFields";
import { useTranslation } from "react-i18next";

export default function Experience(props) {
  const { t } = useTranslation();
  const {
    formField: { experience, projects, employees },
  } = props;


  return (
    <>
      <p className="card__subtitle">{t("ExpertiseQuestion1")}</p>
      <InputField name={experience.name} type="number" fullWidth />
      <p className="card__subtitle">{t("ExpertiseQuestion2")}</p>
      <InputFieldSetConditional name={projects.name} type="number" fullWidth />
      <p className="card__subtitle">{t("ExpertiseQuestion3")}</p>
      <InputField name={employees.name} type="number" fullWidth />
    </>
  );
}
