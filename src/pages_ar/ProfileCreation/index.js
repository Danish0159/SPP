import { lazy } from "react";

import DriverAr from "./Driver";
import About from "./About";
import Experience from "./Experience";
import Resource from "./Resource";
import Service from "./Service";
import Contact from "./Contact";
import Photo from "./Photo";

export const JoinUsAr = lazy(() =>
  import("./JoinUs").then(({ default: JoinUsAr }) => ({
    default: JoinUsAr,
  }))
);

export {
  DriverAr,
  About,
  Experience,
  Resource,
  Service,
  Contact,
  Photo,
};
