import React from "react";
import { SelectField } from "../../components/ProfileCreation/FormFields";

const categories = [
  {
    value: "Air Conditioning",
    label: "Air Conditioning",
  },
  {
    value: "Plumbing",
    label: "Plumbing",
  },
  {
    value: "Firefighting",
    label: "Firefighting",
  },
  {
    value: "Electrical",
    label: "Electrical",
  },
  {
    value: "CCTV",
    label: "CCTV",
  },
  {
    value: "Fire alarm",
    label: "Fire alarm",
  },
  {
    value: "Sewer Lines",
    label: "Sewer Lines",
  },
  {
    value: "Glass Doors and Windows",
    label: "Glass Doors and Windows",
  },
  {
    value: "Gyps Work",
    label: "Gyps Work",
  },
  {
    value: "Gypsumboard",
    label: "Gypsumboard",
  },
  {
    label: "Plaster",
    value: "Plaster",
  },
  {
    label: "Block and Breaks",
    value: "Block and Breaks",
  },
  {
    label: "Civil",
    value: "Civil",
  },
  {
    label: "Structure",
    value: "Structure",
  },
  {
    label: "Mechanical",
    value: "Mechanical",
  },
  {
    label: "Electromechanical",
    value: "Electromechanical",
  },
  {
    value: "Complete Building",
    label: "Complete Building",
  },
  {
    label: "Cladding",
    value: "Cladding",
  },
  {
    label: "Metal steel Works",
    value: "Metal steel Works",
  },
  {
    label: "Wood Works",
    value: "Wood Works",
  },
  {
    label: "Kitchen Installation",
    value: "Kitchen Installation",
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
