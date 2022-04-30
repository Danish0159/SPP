import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRouteCDC({ component: Component, ...restOfProps }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        (user && user.role === "Company") ||
          (user && user.role === "Designer") ||
          (user && user.role === "Contractor") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Signup" />
        )
      }
    />
  );
}

export default PrivateRouteCDC;