import React from "react";
import { SelectField } from "../../components/ProfileCreation/FormFields";
import { categories } from "../../utils/constants";

export default function Category(props) {
  const {
    formField: { category },
  } = props;
  return (
    <>
      <p className="card__subtitle">What are the main services you offer</p>
      <SelectField
        name={category.name}
        // label={category.label}
        data={categories}
        fullWidth
      />
    </>
  );
}
