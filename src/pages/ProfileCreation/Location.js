import React from "react";
import { useSelector } from "react-redux";
import { SelectFieldSetConditional, SelectMultiple } from "../../components/ProfileCreation/FormFields";
import { countries, pakCities, saudiCities } from "../../utils/constants";
import { Field } from 'formik'

export default function Location(props) {
  const { conditionalFlag } = useSelector(
    (state) => state.profile
  );
  const {
    formField: { country, city },
  } = props;
  return (
    <>
      <p className="card__subtitle">Country</p>
      <SelectFieldSetConditional
        name={country.name}
        data={countries}
        fullWidth
      />
      <p className="card__subtitle">City</p>

      <Field
        name={city.name}
        component={SelectMultiple}
        options={
          conditionalFlag === "Pakistan" ? pakCities :
            conditionalFlag === "Saudi Arabia" ? saudiCities : []}
        textFieldProps={{
          fullWidth: true,
        }}
        multiple
      />
    </>
  );
}