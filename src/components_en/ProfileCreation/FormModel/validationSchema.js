import * as Yup from "yup";
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

export const validationSchema = [
    Yup.object().shape({
        [category.name]: Yup.object().nullable().required(`${category.requiredErrorMsg}`),
        [subCategory.name]: Yup.object().nullable().required(`${subCategory.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [experience.name]: Yup.number()
            .min(0, "Min value 0.")
            .required(`${experience.requiredErrorMsg}`),

        [projects.name]: Yup.number()
            .min(1, "Minimum 1 Project Must be Added").max(5, "Maximum 5 Projects Can be Added.")
            .required(`${projects.requiredErrorMsg}`),

        [employees.name]: Yup.number()
            .min(1, "Min value 1.")
            .required(`${employees.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [name.name]: Yup.string("Enter Name").required(
            `${name.requiredErrorMsg} | Limit is 15 chars` 
        ),

        [about.name]: Yup.string("Enter About").required(
            `${about.requiredErrorMsg} | Limit is 75 chars`
        ),

        [vision.name]: Yup.string("Enter Vision").required(
            `${vision.requiredErrorMsg} | Limit is 75 chars`
        ),

        [mission.name]: Yup.string("Enter Mission").required(
            `${mission.requiredErrorMsg} | Limit is 75 chars`
        ),
    }),

    Yup.object().shape({
        [projectName1.name]: Yup.string("Enter Project Name"),
        [projectName2.name]: Yup.string("Enter Project Name"),
        [projectName3.name]: Yup.string("Enter Project Name"),
        [projectName4.name]: Yup.string("Enter Project Name"),
        [projectName5.name]: Yup.string("Enter Project Name"),

        [projectLocation1.name]: Yup.string("Enter Project Location"),
        [projectLocation2.name]: Yup.string("Enter Project Location"),
        [projectLocation3.name]: Yup.string("Enter Project Location"),
        [projectLocation4.name]: Yup.string("Enter Project Location"),
        [projectLocation5.name]: Yup.string("Enter Project Location"),
        // Optional Description.
        [projectDescription1.name]: Yup.string("Enter Project Description"),
        [projectDescription2.name]: Yup.string("Enter Project Description"),
        [projectDescription3.name]: Yup.string("Enter Project Description"),
        [projectDescription4.name]: Yup.string("Enter Project Description"),
        [projectDescription5.name]: Yup.string("Enter Project Description"),

    }),

    Yup.object().shape({
        [country.name]: Yup.object().nullable().required(
            `${country.requiredErrorMsg}`
        ),

        // skills: array().required('At least one skill is required')

        [city.name]: Yup.array().min(1, `${city.requiredErrorMsg}`).required(
            `${city.requiredErrorMsg}`
        ),
    }),

    Yup.object().shape({
        [phone.name]: Yup.string("Enter Phone Number")
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
