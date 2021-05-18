import {RouteProps} from 'react-router-dom'
import HomePage from '../pages/home';
import CloudsPage from '../pages/clouds';

// TODO: Use private routes for private pages after add authentication

export interface Path extends RouteProps {
    isPrivate?: boolean,
}

export const paths: Path[] = [
    {
        path: '/',
        component: HomePage,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/clouds',
        component: CloudsPage,
        exact: false,
        isPrivate: false,
    },
];
