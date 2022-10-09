import { lazy } from "react";

import DriverEn from "./Driver";
import About from "./About";
import Experience from "./Experience";
import Resource from "./Resource";
import Service from "./Service";
import Contact from "./Contact";
import Photo from "./Photo";

export const JoinUsEn = lazy(() =>
  import("./JoinUs").then(({ default: JoinUsEn }) => ({
    default: JoinUsEn,
  }))
);

export {
  DriverEn,
  About,
  Experience,
  Resource,
  Service,
  Contact,
  Photo,
};
