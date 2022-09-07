import {registrationFormModel} from "./registrationFormModel";

const {
  formField: {
    category,
    subCategory,
    experience,
    projects,
    employees,
    name,
    about,
    vision,
    mission,
    country,
    city,
    phone,
    image,
  },
} = registrationFormModel;



export const formInitialValues = {
  [category.name]: "",
  [subCategory.name]: "",
  [experience.name]: "",
  [projects.name]: "",
  [employees.name]: "",
  [name.name]: "",
  [about.name]: "",
  [vision.name]: "",
  [mission.name]: "",
  [country.name]: "",
  [city.name]: [],
  [phone.name]: "",
  [image.name]: ""
};