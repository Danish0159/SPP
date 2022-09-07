import * as Yup from "yup";
import { registrationFormModel } from "./registrationFormModel";
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


export const validationSchema = [
    Yup.object().shape({
        [category.name]: Yup.object().nullable().required(`${category.requiredErrorMsg}`),
        [subCategory.name]: Yup.object().nullable().required(`${subCategory.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [experience.name]: Yup.number()
            .min(0, "Min Value 0.")
            .required(`${experience.requiredErrorMsg}`),

        [projects.name]: Yup.number()
            .min(0, "Mini Value 0.")
            .required(`${projects.requiredErrorMsg}`),

        [employees.name]: Yup.number()
            .min(1, "Min Value 1.")
            .required(`${employees.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [name.name]: Yup.string("Enter Name").required(
            `${name.requiredErrorMsg}`
        ),

        [about.name]: Yup.string("Enter About").required(
            `${about.requiredErrorMsg}`
        ),

        [vision.name]: Yup.string("Enter Vision").required(
            `${vision.requiredErrorMsg}`
        ),

        [mission.name]: Yup.string("Enter Mission").required(
            `${mission.requiredErrorMsg}`
        ),
    }),

    Yup.object().shape({
        [country.name]: Yup.object().nullable().required(
            `${country.requiredErrorMsg}`
        ),

        [city.name]: Yup.array().min(1, `${city.requiredErrorMsg}`).required(
            `${city.requiredErrorMsg}`
        ),
    }),

    Yup.object().shape({
        [phone.name]: Yup.string().required(`${phone.requiredErrorMsg}`)
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must be exactly 10 digits')
            .max(11, 'Must be exactly 11 digits')
    }),

    // Image Upload.
    Yup.object().shape({
        [image.name]: Yup.string("Select Image").required(
            `${image.requiredErrorMsg}`
        ),
    }),
];
