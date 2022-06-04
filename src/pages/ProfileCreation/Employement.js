import React from "react";
import { InputField } from "../../components/ProfileCreation/FormFields";
import { useTranslation } from "react-i18next";

export default function Employement(props) {
  const { t } = useTranslation();
  const {
    formField: { company, location, description },
  } = props;


  return (
    <>
      <main>
        <p className="card__subtitle">{t("EmploymentQuestion1")}</p>
        <InputField name={company.name} type="text" fullWidth />
        <p className="card__subtitle">{t("EmploymentQuestion2")}</p>
        <InputField name={location.name} type="text" fullWidth />
        <p className="card__subtitle">{t("EmploymentQuestion3")}</p>
        <InputField name={description.name} type="text" fullWidth />
      </main>
    </>
  );
}
