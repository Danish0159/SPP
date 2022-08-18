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
    (state) => state.profileAr
  );

  const user = getUserFromLocalStorage();

  const role_en = user.role_en;
  const role_ar = user.role_ar;

  return (
    <>
    <p className="card__subtitle">ما هي الخدمات الرئيسية التي تقدمها؟</p>
    <SelectFieldSetConditional
      name={category.name}
      data={
        role_en === "Contractor" ? categories.Contractor :
          role_en === "Handyman" ? categories.Handyman :
            role_en === "Designer" ? categories.Designer :
              role_en === "Consultant" ? categories.Consultant
                : null
      }
      fullWidth
    />

    <p className="card__subtitle">حدد فئة فرعية</p>

    <SelectField
      name={subCategory.name}
      data={subCategories[role_ar][conditionalFlag]}
      fullWidth
    />
  </>
  );
}