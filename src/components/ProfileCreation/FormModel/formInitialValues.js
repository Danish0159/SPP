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
    images,
    previews,
    rate,
    country,
    city,
    phone,
    image,
    portfolio,
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
  [portfolio.name]: {
    projectName: "",
    projectLocation: "",
    images: [],
    previews: [],
  },
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
