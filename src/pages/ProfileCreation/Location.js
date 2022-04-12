import React from "react";
import { useSelector } from "react-redux";
import { SelectFieldLocation } from "../../components/ProfileCreation/FormFields";
import { countries, pakCities, saudiCities } from "../../utils/constants";

export default function Location(props) {

  const { countryFlag } = useSelector(
    (state) => state.auth
  );

  const {
    formField: { country, city },
  } = props;
  return (
    <>
      <p className="card__subtitle">Country</p>
      <SelectFieldLocation
        name={country.name}
        data={countries}
        fullWidth
      />
      <p className="card__subtitle">City</p>
      <SelectFieldLocation
        name={city.name}
        data={
          countryFlag === "Pakistan" ? pakCities :
            countryFlag === "Saudi Arabia" ? saudiCities : null}
        fullWidth
      />
    </>
  );
}
