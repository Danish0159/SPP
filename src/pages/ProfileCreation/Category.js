import React from "react";
import { SelectField, SelectFieldSetConditional } from "../../components/ProfileCreation/FormFields";
import { categories, subCategories } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Category(props) {
  const {
    formField: { category, subCategory },
  } = props;

  const { user, conditionalFlag } = useSelector(
    (state) => state.auth
  );
  const role = user.user.role;
  const { t } = useTranslation();

  return (
    <>
      <p className="card__subtitle">{t("CategoryQuestion1")}</p>
      <SelectFieldSetConditional
        name={category.name}
        data={
          role === "Contractor" ? categories.Contractor :
            role === "HandymenAndMaintenance" ? categories.HandymenAndMaintenance :
              role === "Designer" ? categories.Designer :
                role === "ConsultantFirms" ? categories.ConsultantFirms
                  : null
        }
        fullWidth
      />

      <p className="card__subtitle">{t("CategoryQuestion2")}</p>

      <SelectField
        name={subCategory.name}
        data={subCategories[role][conditionalFlag]}
        fullWidth
      />
    </>
  );
}