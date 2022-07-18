import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateWithUser({ component: Component, ...restOfProps }) {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                (!user) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}

export default PrivateWithUser;