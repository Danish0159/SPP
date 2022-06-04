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
    projectName1,
    projectLocation1,
    projectDescription1,
    multiFiles,
    projectName2,
    projectLocation2,
    projectDescription2,
    projectName3,
    projectLocation3,
    projectDescription3,
    projectName4,
    projectLocation4,
    projectDescription4,
    projectName5,
    projectLocation5,
    projectDescription5,
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
  [projectName1.name]: "",
  [projectLocation1.name]: "",
  [projectDescription1.name]: "",
  [projectName2.name]: "",
  [projectLocation2.name]: "",
  [projectDescription2.name]: "",
  [projectName3.name]: "",
  [projectLocation3.name]: "",
  [projectDescription3.name]: "",
  [projectName4.name]: "",
  [projectLocation4.name]: "",
  [projectDescription4.name]: "",
  [projectName5.name]: "",
  [projectLocation5.name]: "",
  [projectDescription5.name]: "",
  [multiFiles.name]: {
    src1: [],
    src2: [],
    src3: [],
    src4: [],
    src5: [],
  },
  [country.name]: "",
  [city.name]: "",
  [phone.name]: "",
  [image.name]: {
    file: null,
    src: null,
    name: "",
  },
};