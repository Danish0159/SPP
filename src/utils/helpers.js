import * as yup from "yup";
////////////////////////////////////////
// SignUp 

// initial values.
export const signupInitialValues = {
    name: "",
    email: "",
    password: "",
};
// validation schema.
export const signupValidationSchema = yup.object({
    name: yup
        .string("Enter your name")
        .min(3)
        .max(25)
        .required("Name is required"),
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .required("Password is required"),
});

// Login
////////////////////////////////////////
// initial values.
export const loginInitialValues = {
    email: "",
    password: "",
};

// validation schema
export const loginValidationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(8, "Password is too short - Enter 8 chars minimum.")
        .required("Password is required"),
});