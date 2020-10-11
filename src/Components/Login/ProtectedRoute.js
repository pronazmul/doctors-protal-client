import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({children, ...rest}) => {

    // return (
    //     <Route
    //     {...rest}
    //     render={({ location }) =>
    //        ? (
    //         children
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/login",
    //             state: { from: location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );
};

export default ProtectedRoute;