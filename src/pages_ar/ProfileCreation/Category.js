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

  const role = user.role_ar;

  return (
    <>
    <p className="card__subtitle">ما هي الخدمات الرئيسية التي تقدمها؟</p>
    <SelectFieldSetConditional
      name={category.name}
      data={
        role === "مقاول" ? categories.مقاول :
          role === "صيانة" ? categories.صيانة :
            role === "مصمم" ? categories.مصمم :
              role === "استشاري" ? categories.استشاري
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