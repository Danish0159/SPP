import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateWithOutProfile({ component: Component, ...restOfProps }) {
    const { user } = useSelector(
        (state) => state.auth
    );

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                (user && user.user.profile === true) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}
export default PrivateWithOutProfile;