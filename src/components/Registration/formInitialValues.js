import registrationFormModel from "./registrationFormModel";

const {
  formField: {
    category,
    experience,
    projects,
    employees,
    company,
    location,
    description,
    projectName,
    projectLocation,
    rate,
    country,
    city,
    phone,
    image,
  },
} = registrationFormModel;

export default {
  [category.name]: "",
  [experience.name]: "",
  [projects.name]: "",
  [employees.name]: "",
  [company.name]: "",
  [location.name]: "",
  [description.name]: "",
  [projectName.name]: "",
  [projectLocation.name]: "",
  [rate.name]: "",
  [country.name]: "",
  [city.name]: "",
  [phone.name]: "",
  [image.name]: {
    file: null,
    src: null,
    name: "",
  },
};
