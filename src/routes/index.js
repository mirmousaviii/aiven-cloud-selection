import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from './private-route';
import {paths} from './paths';

const AppRoute = () => (
    <BrowserRouter>
      <Switch>
        {paths.map((route, index) =>
            route.isPrivate ? (
                <PrivateRoute key={index} {...route} />
            ) : (
                <Route key={index} {...route} />
            ),
        )}
      </Switch>
    </BrowserRouter>
);

export default AppRoute;
