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
        country,
        city,
        phone,
        image,
    },
} = registrationFormModel;

export const validationSchema = [
    Yup.object().shape({
        [category.name]: Yup.object()
            .nullable()
            .required(`${category.requiredErrorMsg}`),
        [subCategory.name]: Yup.object()
            .nullable()
            .required(`${subCategory.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [experience.name]: Yup.number()
            .min(0, "الحد الأدنى للقيمة 0.")
            .required(`${experience.requiredErrorMsg}`),

        [projects.name]: Yup.number()
            .min(0, "الحد الأدنى للقيمة 0.")
            .required(`${projects.requiredErrorMsg}`),

        [employees.name]: Yup.number()
            .min(1, "الحد الأدنى للقيمة 1.")
            .required(`${employees.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [name.name]: Yup.string("أدخل الاسم").required(
            `${name.requiredErrorMsg}`
        ),

        [about.name]: Yup.string("أدخل حول").required(
            `${about.requiredErrorMsg}`
        ),

        [vision.name]: Yup.string("أدخل فيجن").required(
            `${vision.requiredErrorMsg}`
        ),

        [mission.name]: Yup.string("أدخل المهمة").required(
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
            .matches(/^[0-9]+$/, "يجب أن يتكون من أرقام فقط")
            .min(10, 'يجب أن يكون 10 رقمًا بالضبط')
            .max(11, 'يجب أن يكون 11 رقمًا بالضبط')
    }),


    // Image Upload.
    Yup.object().shape({
        [image.name]: Yup.string("اختر صورة").required(
            `${image.requiredErrorMsg}`
        ),
    }),
];
