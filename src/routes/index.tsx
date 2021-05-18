import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from './private-route';
import {paths} from './paths';

const AppRoute: React.FC = (): JSX.Element => (
    <BrowserRouter>
        <Switch>
            {paths.map((route, index) =>
                // We can use index as a unique key in the map
                // because route is NOT deletable
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
