import { lazy } from "react";

import DriverAr from "./Driver";
import Category from "./Category";
import ExpertiseLevel from "./ExpertiseLevel";
import About from "./About";
import Location from "./Location";
import ProfilePhoto from "./ProfilePhoto";
import PhoneNumber from "./PhoneNumber";

export const JoinUsAr = lazy(() =>
  import("./JoinUs").then(({ default: JoinUsAr }) => ({
    default: JoinUsAr,
  }))
);


export {
  DriverAr,
  Category,
  ExpertiseLevel,
  About,
  Location,
  PhoneNumber,
  ProfilePhoto,
};


