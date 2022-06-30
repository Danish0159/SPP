import React from "react";
import { InputField } from "../../components/ProfileCreation/FormFields";
import { useTranslation } from "react-i18next";

export default function PhoneNumber(props) {
  const { t } = useTranslation();
  const {
    formField: { phone },
  } = props;

  return (
    <>
      <p className="card__subtitle"> {t("PhoneQuestion1")}</p>
      <InputField
        name={phone.name}
        type="text"
        fullWidth
      />
      <p className="card__subtitle">
        {t("PhoneSubtitle")}
      </p>
    </>
  );
}
