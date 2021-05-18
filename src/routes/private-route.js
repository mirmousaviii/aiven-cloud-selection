import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = (props) => {
  // TODO: Handle this part after authentication
  const token = localStorage.getItem('token');

  return token ? <Route {...props} /> : <Redirect to="/login"/>;
};
