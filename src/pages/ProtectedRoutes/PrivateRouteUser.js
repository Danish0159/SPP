import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRouteUser({ component: Component, ...restOfProps }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        user && user.role === "User" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default PrivateRouteUser;
