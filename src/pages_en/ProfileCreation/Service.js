import React from "react";
import { useSelector } from "react-redux";
import { SelectField, SelectFieldSetConditional, SelectMultiple } from "../../components_en/ProfileCreation/FormFields";
import { updateCategoryFlag, updateRegionFlag } from "../../features_en/profile/profileSlice";
import { categories, subCategories, regions, albahahCities, aljawfCities, alqaseemCities, aseerCities, easternregionCities, hailCities, jazanCities, meccaCities, medinaCities, najranCities, northernbordersCities, riyadhCities, taboukCities } from '../../utils/constantsEn';
import { getUserFromLocalStorage } from "../../utils/localStorage";


export default function Service({ control }) {

  const { regionFlag, categoryFlag } = useSelector(
    (state) => state.profileEn
  );

  const user = getUserFromLocalStorage();

  const role = user.role_en;

  console.log("service");

  return (
    <div>
      <p className="card__subtitle">Main category of the service provided :</p>
      <SelectFieldSetConditional
        name="category"
        control={control}
        updateConditionalFlag={updateCategoryFlag}
        data={
          role === "Contractor" ? categories.Contractor :
          role === "Maintenance" ? categories.Maintenance :
          role === "Designer" ? categories.Designer :
          role === "Consultant" ? categories.Consultant
          : null
        }
      />
      <p className="card__subtitle">Sub-Category of the chosen service category :</p>
      <SelectField
        name="subCategory"
        control={control}
        data={subCategories[role][categoryFlag]}
      />
      <p className="card__subtitle">Region of service provisioning :</p>
      <SelectFieldSetConditional
        name="region"
        control={control}
        updateConditionalFlag={updateRegionFlag}
        data={regions}
      />
      <p className="card__subtitle">Cities of service provisioning in the selected region :</p>
      <SelectMultiple
        name="city"
        control={control}
        data={
          regionFlag === "Al-Bahah" ? albahahCities :
          regionFlag === "Al-Jawf" ? aljawfCities :
          regionFlag === "Al-Qaseem" ? alqaseemCities :
          regionFlag === "Aseer" ? aseerCities :
          regionFlag === "Eastern Region" ? easternregionCities :
          regionFlag === "Ḥā'il" ? hailCities :
          regionFlag === "Jazan" ? jazanCities :
          regionFlag === "Mecca" ? meccaCities :
          regionFlag === "Medina" ? medinaCities :
          regionFlag === "Najrān" ? najranCities :
          regionFlag === "Northern Borders" ? northernbordersCities :
          regionFlag === "Riyadh" ? riyadhCities :
          regionFlag === "Tabouk" ? taboukCities : []
        }
      />
    </div>
  );
}