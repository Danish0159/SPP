import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateWithOutUser({ component: Component, ...restOfProps }) {
    const formValues = localStorage.getItem("formValues");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                (formValues) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/Signup" />
                )
            }
        />
    );
}

export default PrivateWithOutUser;