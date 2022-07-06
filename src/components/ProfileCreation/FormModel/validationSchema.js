import * as Yup from "yup";
import registrationFormModel from "./registrationFormModel";
const {
    formField: {
        category,
        subCategory,
        experience,
        projects,
        employees,
        company,
        location,
        description,
        projectName1,
        projectLocation1,
        projectDescription1,
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

const FILE_SIZE = 10 * 1024 * 1024; // ~= 10 MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export default [
    Yup.object().shape({
        [category.name]: Yup.string()
            .nullable()
            .required(`${category.requiredErrorMsg}`),
        [subCategory.name]: Yup.string()
            .nullable()
            .required(`${subCategory.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [experience.name]: Yup.number()
            .min(0, "Min value 0.")
            .required(`${experience.requiredErrorMsg}`),

        [projects.name]: Yup.number()
            .min(1, "Min value 1.").max(5, "Max value 5.")
            .required(`${projects.requiredErrorMsg}`),

        [employees.name]: Yup.number()
            .min(1, "Min value 1.")
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
        [projectName1.name]: Yup.string("Enter ProjectName"),
        [projectName2.name]: Yup.string("Enter ProjectName"),
        [projectName3.name]: Yup.string("Enter ProjectName"),
        [projectName4.name]: Yup.string("Enter ProjectName"),
        [projectName5.name]: Yup.string("Enter ProjectName"),

        [projectLocation1.name]: Yup.string("Enter projectLocation"),
        [projectLocation2.name]: Yup.string("Enter projectLocation"),
        [projectLocation3.name]: Yup.string("Enter projectLocation"),
        [projectLocation4.name]: Yup.string("Enter projectLocation"),
        [projectLocation5.name]: Yup.string("Enter projectLocation"),
        // Optional Description.
        [projectDescription1.name]: Yup.string("Enter projectLocation"),
        [projectDescription2.name]: Yup.string("Enter projectLocation"),
        [projectDescription3.name]: Yup.string("Enter projectLocation"),
        [projectDescription4.name]: Yup.string("Enter projectLocation"),
        [projectDescription5.name]: Yup.string("Enter projectLocation"),

    }),

    Yup.object().shape({
        [country.name]: Yup.string("Enter Country Name").nullable().required(
            `${country.requiredErrorMsg}`
        ),

        // skills: array().required('At least one skill is required')

        [city.name]: Yup.array().min(1, `${city.requiredErrorMsg}`).required(
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
