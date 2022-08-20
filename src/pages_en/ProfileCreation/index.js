import { lazy } from "react";

import DriverEn from "./Driver";
import Category from "./Category";
import ExpertiseLevel from "./ExpertiseLevel";
import About from "./About";
import Portfolio from "./Portfolio";
import Location from "./Location";
import ProfilePhoto from "./ProfilePhoto";
import PhoneNumber from "./PhoneNumber";

export const JoinUsEn = lazy(() =>
  import("./JoinUs").then(({ default: JoinUsEn }) => ({
    default: JoinUsEn,
  }))
);

export {
  DriverEn,
  Category,
  ExpertiseLevel,
  About,
  Portfolio,
  Location,
  PhoneNumber,
  ProfilePhoto,
};
