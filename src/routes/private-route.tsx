import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Path} from "./paths";

type Props = Path;

export const PrivateRoute: React.FC<Props> = (props): JSX.Element => {
    // TODO: Handle this part after authentication
    const token = localStorage.getItem('token');

    return token ? <Route {...props} /> : <Redirect to="/login"/>;
};
