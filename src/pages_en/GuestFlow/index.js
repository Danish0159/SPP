import { lazy } from "react";

export const HomePageEn = lazy(() =>
import("./HomePage").then(({ default: HomePageEn }) => ({
  default: HomePageEn,
}))
);

export const UsersPageEn = lazy(() =>
  import("./UsersPage").then(({ default: UsersPageEn }) => ({
    default: UsersPageEn,
  }))
);

export const SingleUserPageEn = lazy(() =>
  import("./SingleUserPage").then(({ default: SingleUserPageEn }) => ({
    default: SingleUserPageEn,
  }))
);

export const ProjectsPageEn = lazy(() =>
  import("./ProjectsPage").then(({ default: ProjectsPageEn }) => ({
    default: ProjectsPageEn,
  }))
);

export const SingleProjectPageEn = lazy(() =>
  import("./SingleProjectPage").then(({ default: SingleProjectPageEn }) => ({
    default: SingleProjectPageEn,
  }))
);
