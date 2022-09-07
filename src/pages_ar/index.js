import { lazy } from "react";

export const LoginPageAr = lazy(() =>
  import("./LoginPage").then(({ default: LoginPageAr }) => ({
    default: LoginPageAr,
  }))
);

export const SignupPageAr = lazy(() =>
  import("./SignupPage").then(({ default: SignupPageAr }) => ({
    default: SignupPageAr,
  }))
);

export const AboutPageAr = lazy(() =>
  import("./AboutPage").then(({ default: AboutPageAr }) => ({
    default: AboutPageAr,
  }))
);

export const ContactPageAr = lazy(() =>
  import("./ContactPage").then(({ default: ContactPageAr }) => ({
    default: ContactPageAr,
  }))
);