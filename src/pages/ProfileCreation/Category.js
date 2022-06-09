import React from "react";
import { SelectField } from "../../components/ProfileCreation/FormFields";
import { categories } from "../../utils/constants";
import { useTranslation } from "react-i18next";

export default function Category(props) {
  const { t } = useTranslation();
  const {
    formField: { category },
  } = props;

  return (
    <>
      <p className="card__subtitle">{t("CategoryQuestion1")}</p>
      <SelectField
        name={category.name}
        data={categories}
        fullWidth
      />
    </>
  );
}