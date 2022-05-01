import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRouteCDC({ component: Component, ...restOfProps }) {
  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        (user && user.user.profile === "false") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default PrivateRouteCDC;