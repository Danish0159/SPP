import * as Yup from "yup";
import {registrationFormModel} from "./registrationFormModel";
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
            .min(1, "الحد الأدنى للقيمة 5.").max(5, "أقصى قيمة 5.")
            .required(`${projects.requiredErrorMsg}`),

        [employees.name]: Yup.number()
            .min(1, "الحد الأدنى للقيمة 1.")
            .required(`${employees.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [company.name]: Yup.string("أدخل اسم الشركة").required(
            `${company.requiredErrorMsg}`
        ),

        [location.name]: Yup.string("إدخال الدولة").required(
            `${location.requiredErrorMsg}`
        ),

        [description.name]: Yup.string("أدخل الوصف").required(
            `${description.requiredErrorMsg}`
        ),
    }),

    Yup.object().shape({
        [projectName1.name]: Yup.string("أدخل اسم المشروع"),
        [projectName2.name]: Yup.string("أدخل اسم المشروع"),
        [projectName3.name]: Yup.string("أدخل اسم المشروع"),
        [projectName4.name]: Yup.string("أدخل اسم المشروع"),
        [projectName5.name]: Yup.string("أدخل اسم المشروع"),

        [projectLocation1.name]: Yup.string("أدخل موقع المشروع"),
        [projectLocation2.name]: Yup.string("أدخل موقع المشروع"),
        [projectLocation3.name]: Yup.string("أدخل موقع المشروع"),
        [projectLocation4.name]: Yup.string("أدخل موقع المشروع"),
        [projectLocation5.name]: Yup.string("أدخل موقع المشروع"),
        // Optional Description.
        [projectDescription1.name]: Yup.string("أدخل وصف المشروع"),
        [projectDescription2.name]: Yup.string("أدخل وصف المشروع"),
        [projectDescription3.name]: Yup.string("أدخل وصف المشروع"),
        [projectDescription4.name]: Yup.string("أدخل وصف المشروع"),
        [projectDescription5.name]: Yup.string("أدخل وصف المشروع"),

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
        [phone.name]: Yup.string("أدخل رقم الهاتف")
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "رقم الهاتف غير صالح ، التنسيق الصحيح +493367341920"
            )
            .required(`${phone.requiredErrorMsg}`),
    }),

    // Image Upload.
    Yup.object().shape({
        [image.name]: Yup.mixed()
            .required("مطلوب ملف")
            .test(
                "isEmpty",
                `${image.requiredErrorMsg}`,
                (value) => value && value.file
            )
            .test(
                "fileSize",
                "الملف كبير جدًا",
                (value) => value && value.file && value.file.size <= FILE_SIZE
            )
            .test(
                "fileFormat",
                "صيغة غير مدعومة",
                (value) =>
                    value && value.file && SUPPORTED_FORMATS.includes(value.file.type)
            ),
    }),
];
