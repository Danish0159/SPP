import { lazy } from "react";

export const HomePageAr = lazy(() =>
import("./HomePage").then(({ default: HomePageAr }) => ({
  default: HomePageAr,
}))
);

export const UsersPageAr = lazy(() =>
  import("./UsersPage").then(({ default: UsersPageAr }) => ({
    default: UsersPageAr,
  }))
);

export const SingleUserPageAr = lazy(() =>
  import("./SingleUserPage").then(({ default: SingleUserPageAr }) => ({
    default: SingleUserPageAr,
  }))
);

export const ProjectsPageAr = lazy(() =>
  import("./ProjectsPage").then(({ default: ProjectsPageAr }) => ({
    default: ProjectsPageAr,
  }))
);

export const SingleProjectPageAr = lazy(() =>
  import("./SingleProjectPage").then(({ default: SingleProjectPageAr }) => ({
    default: SingleProjectPageAr,
  }))
);

