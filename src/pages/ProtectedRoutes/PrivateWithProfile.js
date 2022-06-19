import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateWithProfile({ component: Component, ...restOfProps }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        (user && !user.profile) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default PrivateWithProfile;