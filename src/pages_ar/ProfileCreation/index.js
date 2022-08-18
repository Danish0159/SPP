import { lazy } from "react";

import DriverAr from "./Driver";
import Category from "./Category";
import Experience from "./Experience";
import Employement from "./Employement";
import Portfolio from "./Portfolio";
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
  Experience,
  Employement,
  Portfolio,
  Location,
  PhoneNumber,
  ProfilePhoto,
};


