import React from "react";
import { useSelector } from "react-redux";
import { SelectField, SelectFieldSetConditional, SelectMultiple } from "../../components_ar/ProfileCreation/FormFields";
import { updateCategoryFlag, updateRegionFlag } from "../../features_ar/profile/profileSlice";
import { categories, subCategories, regions, albahahCities, aljawfCities, alqaseemCities, aseerCities, easternregionCities, hailCities, jazanCities, meccaCities, medinaCities, najranCities, northernbordersCities, riyadhCities, taboukCities } from '../../utils/constantsAr';
import { getUserFromLocalStorage } from "../../utils/localStorage";


export default function Service({ control }) {

  const { regionFlag, categoryFlag } = useSelector(
    (state) => state.profileAr
  );

  const user = getUserFromLocalStorage();

  const role = user.role_ar;

  console.log("service");

  return (
    <div>
      <p className="card__subtitle">الفئة الرئيسية للخدمة المقدمة :</p>
      <SelectFieldSetConditional
        name="category"
        control={control}
        updateConditionalFlag={updateCategoryFlag}
        data={
          role === "مقاول" ? categories.مقاول :
          role === "صيانة" ? categories.صيانة :
          role === "مصمم" ? categories.مصمم :
          role === "استشاري" ? categories.استشاري
          : null
        }
      />
      <p className="card__subtitle">الفئة الفرعية لفئة الخدمة المختارة :</p>
      <SelectField
        name="subCategory"
        control={control}
        data={subCategories[role][categoryFlag]}
      />
      <p className="card__subtitle">منطقة تقديم الخدمة :</p>
      <SelectFieldSetConditional
        name="region"
        control={control}
        updateConditionalFlag={updateRegionFlag}
        data={regions}
      />
      <p className="card__subtitle">مدن تقديم الخدمة في المنطقة المختارة :</p>
      <SelectMultiple
        name="city"
        control={control}
        data={
          regionFlag === "الباحة" ? albahahCities :
          regionFlag === "الجوف" ? aljawfCities :
          regionFlag === "القصيم" ? alqaseemCities :
          regionFlag === "عسير" ? aseerCities :
          regionFlag === "المنطقة الشرقية" ? easternregionCities :
          regionFlag === "حائل" ? hailCities :
          regionFlag === "جازان" ? jazanCities :
          regionFlag === "مكة المكرمة" ? meccaCities :
          regionFlag === "المدينة المنورة" ? medinaCities :
          regionFlag === "نجران" ? najranCities :
          regionFlag === "الحدود الشمالية" ? northernbordersCities :
          regionFlag === "الرياض" ? riyadhCities :
          regionFlag === "تبوك" ? taboukCities : []
        }
      />
    </div>
  );
}