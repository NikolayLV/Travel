import React, {Component} from "react";
import {Navigate} from "react-router-dom";

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return  <Component {...this.props} />

            return <Navigate to='/login'/>
        }
    }

    return RedirectComponent;
}