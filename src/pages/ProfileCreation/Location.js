import React from "react";
import { useSelector } from "react-redux";
import { SelectFieldLocation } from "../../components/ProfileCreation/FormFields";
import { useTranslation } from "react-i18next";
import { countries, pakCities, saudiCities } from "../../utils/constants";

export default function Location(props) {
  const { t } = useTranslation();
  const { countryFlag } = useSelector(
    (state) => state.auth
  );

  const {
    formField: { country, city },
  } = props;
  return (
    <>
      <p className="card__subtitle">{t("LocationQuestion1")}</p>
      <SelectFieldLocation
        name={country.name}
        data={countries}
        fullWidth
      />
      <p className="card__subtitle">{t("LocationQuestion2")}</p>
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