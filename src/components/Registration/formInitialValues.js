import registrationFormModel from "./registrationFormModel";

const {
  formField: { category, experience, projects, employees },
} = registrationFormModel;

export default {
  [category.name]: "",
  [experience.name]: "",
  [projects.name]: "",
  [employees.name]: "",
};
