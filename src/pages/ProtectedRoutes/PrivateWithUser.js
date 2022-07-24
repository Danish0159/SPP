import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getUserFromLocalStorage } from "../../utils/localStorage";

function PrivateWithUser({ component: Component, ...restOfProps }) {
    const user = getUserFromLocalStorage();
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