import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
    Component,
    ...rest
}) => {
    let isLoggedIn = false;
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    return (
        <Route
            {...rest}
            render={(props) => {
                if (username === 'admin@sms.com' && password === 'admin') {
                    isLoggedIn = true;
                } 
                return isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={"/"} />
                );
            }}
        />
    );
};

export default PrivateRoute;