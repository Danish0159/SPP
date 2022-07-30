import React from "react";
import { useSelector } from "react-redux";
import { SelectField, SelectFieldSetConditional } from "../../components_ar/ProfileCreation/FormFields";
import { categories, subCategories } from "../../utils/constantsAr";
import { getUserFromLocalStorage } from "../../utils/localStorage";

export default function Category(props) {
  const {
    formField: { category, subCategory },
  } = props;
  const { conditionalFlag } = useSelector(
    (state) => state.profile
  );

  const user = getUserFromLocalStorage();

  const role = user.role_en;

  return (
    <>
    <p className="card__subtitle">ما هي الخدمات الرئيسية التي تقدمها؟</p>
    <SelectFieldSetConditional
      name={category.name}
      data={
        role === "Contractor" ? categories.Contractor :
          role === "Handyman" ? categories.Handyman :
            role === "Designer" ? categories.Designer :
              role === "Consultant" ? categories.Consultant
                : null
      }
      fullWidth
    />

    <p className="card__subtitle">حدد فئة فرعية</p>

    <SelectField
      name={subCategory.name}
      data={subCategories[role][conditionalFlag]}
      fullWidth
    />
  </>
  );
}