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
    projectName1,
    projectLocation1,
    projectName2,
    projectLocation2,
    projectName3,
    projectLocation3,
    projectName4,
    projectLocation4,
    projectName5,
    projectLocation5,
    rate,
    country,
    city,
    phone,
    image,
  },
} = registrationFormModel;

const FILE_SIZE = 10 * 1024 * 1024; // ~= 10 MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

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
    [projectName1.name]: Yup.string("Enter ProjectName").required(
      `${projectName1.requiredErrorMsg}`
    ),
    [projectName2.name]: Yup.string("Enter ProjectName").required(
      `${projectName2.requiredErrorMsg}`
    ),
    [projectName3.name]: Yup.string("Enter ProjectName").required(
      `${projectName3.requiredErrorMsg}`
    ),
    [projectName4.name]: Yup.string("Enter ProjectName").required(
      `${projectName4.requiredErrorMsg}`
    ),
    [projectName5.name]: Yup.string("Enter ProjectName").required(
      `${projectName5.requiredErrorMsg}`
    ),

    [projectLocation1.name]: Yup.string("Enter projectLocation").required(
      `${projectLocation1.requiredErrorMsg}`
    ),
    [projectLocation2.name]: Yup.string("Enter projectLocation").required(
      `${projectLocation2.requiredErrorMsg}`
    ),
    [projectLocation3.name]: Yup.string("Enter projectLocation").required(
      `${projectLocation3.requiredErrorMsg}`
    ),
    [projectLocation4.name]: Yup.string("Enter projectLocation").required(
      `${projectLocation4.requiredErrorMsg}`
    ),
    [projectLocation5.name]: Yup.string("Enter projectLocation").required(
      `${projectLocation5.requiredErrorMsg}`
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

  // Image Upload.
  Yup.object().shape({
    [image.name]: Yup.mixed()
      .required("A file is required")
      .test(
        "isEmpty",
        `${image.requiredErrorMsg}`,
        (value) => value && value.file
      )
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.file && value.file.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) =>
          value && value.file && SUPPORTED_FORMATS.includes(value.file.type)
      ),
  }),
];
