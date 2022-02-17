import React from "react";
import { SelectField } from "../../components/Registration";

const categories = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "New York",
  },
  {
    value: "2",
    label: "Chicago",
  },
  {
    value: "3",
    label: "Saigon",
  },
];

export default function AddressForm(props) {
  const {
    formField: { category },
  } = props;
  return (
    <SelectField
      name={category.name}
      label={category.label}
      data={categories}
      fullWidth
    />
  );
}
