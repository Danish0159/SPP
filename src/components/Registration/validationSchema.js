import * as Yup from "yup";
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
  },
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

  Yup.object().shape({
    [company.name]: Yup.string("Enter Company name").required(
      `${company.requiredErrorMsg}`
    ),

    [location.name]: Yup.string("Enter Location").required(
      `${location.requiredErrorMsg}`
    ),

    [description.name]: Yup.string("Enter Description").required(
      `${description.requiredErrorMsg}`
    ),
  }),

  Yup.object().shape({
    [projectName.name]: Yup.string("Enter ProjectName").required(
      `${projectName.requiredErrorMsg}`
    ),

    [projectLocation.name]: Yup.string("Enter projectLocation").required(
      `${projectLocation.requiredErrorMsg}`
    ),
  }),

  Yup.object().shape({
    [rate.name]: Yup.string("Enter Rate").required(`${rate.requiredErrorMsg}`),
  }),

  Yup.object().shape({
    [country.name]: Yup.string("Enter Country Name").required(
      `${country.requiredErrorMsg}`
    ),

    [city.name]: Yup.string("Enter City Name").required(
      `${city.requiredErrorMsg}`
    ),
  }),

  Yup.object().shape({
    [phone.name]: Yup.string("Enter Phone Name")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid, Correct Format +493367341920"
      )
      .required(`${phone.requiredErrorMsg}`),
  }),
];
