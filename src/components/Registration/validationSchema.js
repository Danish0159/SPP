import * as Yup from "yup";
import registrationFormModel from "./registrationFormModel";
const {
  formField: { category, experience, projects, employees },
} = registrationFormModel;

export default [
  Yup.object().shape({
    [category.name]: Yup.string()
      .nullable()
      .required(`${category.requiredErrorMsg}`),
  }),

  Yup.object().shape({
    [experience.name]: Yup.number()
      .min(0, "Min value 0.")
      .required(`${experience.requiredErrorMsg}`),

    [projects.name]: Yup.number()
      .min(0, "Min value 0.")
      .required(`${projects.requiredErrorMsg}`),

    [employees.name]: Yup.number()
      .min(0, "Min value 0.")
      .required(`${employees.requiredErrorMsg}`),
  }),
];
