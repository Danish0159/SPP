import React from "react";
import { useSelector } from "react-redux";
import { SelectField, SelectFieldSetConditional } from "../../components_en/ProfileCreation/FormFields";
import { categories, subCategories } from "../../utils/constantsEn";
import { getUserFromLocalStorage } from "../../utils/localStorage";

export default function Category(props) {
  const {
    formField: { category, subCategory },
  } = props;
  
  const { conditionalFlag } = useSelector(
    (state) => state.profileEn
  );

  const user = getUserFromLocalStorage();

  const role = user.role_en;

  return (
    <div>
      <p className="card__subtitle">What are the main services you offer.</p>
      <SelectFieldSetConditional
        name={category.name}
        data={
          role === "Contractor" ? categories.Contractor :
            role === "Maintenance" ? categories.Maintenance :
              role === "Designer" ? categories.Designer :
                role === "Consultant" ? categories.Consultant
                  : null
        }
        fullWidth
      />

      <p className="card__subtitle">Select Sub-Category</p>

      <SelectField
        name={subCategory.name}
        data={subCategories[role][conditionalFlag]}
        fullWidth
      />
    </div>
  );
}