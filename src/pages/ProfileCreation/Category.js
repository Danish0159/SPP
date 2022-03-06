import React from "react";
import { SelectField } from "../../components/ProfileCreation/FormFields";

const categories = [
  {
    value: "1",
    label: "Category 1",
  },
  {
    value: "2",
    label: "Category 2",
  },
  {
    value: "3",
    label: "Category 3",
  },
];

export default function AddressForm(props) {
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
