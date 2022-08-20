import { lazy } from "react";

export const LoginPageEn = lazy(() =>
  import("./LoginPage").then(({ default: LoginPageEn }) => ({
    default: LoginPageEn,
  }))
);

export const SignupPageEn = lazy(() =>
  import("./SignupPage").then(({ default: SignupPageEn }) => ({
    default: SignupPageEn,
  }))
);

export const AboutPageEn = lazy(() =>
  import("./AboutPage").then(({ default: AboutPageEn }) => ({
    default: AboutPageEn,
  }))
);

export const PrivacyPolicyPageEn = lazy(() =>
  import("./PrivacyPolicyPage").then(({ default: PrivacyPolicyPageEn }) => ({
    default: PrivacyPolicyPageEn,
  }))
);
