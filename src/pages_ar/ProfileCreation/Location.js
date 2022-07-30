import React from "react";
import { useSelector } from "react-redux";
import { SelectFieldSetConditional, SelectMultiple } from "../../components_ar/ProfileCreation/FormFields";
import { countries, pakCities, saudiCities } from "../../utils/constantsAr";

export default function Location(props) {
  const { conditionalFlag } = useSelector(
    (state) => state.profile
  );
  const {
    formField: { country, city },
  } = props;
  return (
    <>
      <p className="card__subtitle">دولة</p>
      <SelectFieldSetConditional
        name={country.name}
        data={countries}
        fullWidth
      />
      <p className="card__subtitle">مدينة</p>
      <SelectMultiple
        name={city.name}
        data={
          conditionalFlag === "Pakistan" ? pakCities :
            conditionalFlag === "Saudi Arabia" ? saudiCities : []}
        fullWidth
      />
    </>
  );
}