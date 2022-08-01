import React from "react";
import { Redirect, Route } from "react-router-dom";

function CheckHomePage({ component: Component, ...restOfProps }) {
  const lang = localStorage.getItem("lang");
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        lang === "en" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/ar" />
        )
      }
    />
  );
}

export default CheckHomePage;