import {RouteProps} from 'react-router-dom'
import HomePage from '../pages/home';
import CloudsPage from '../pages/clouds';

// TODO: Use private routes for private pages after add authentication

export interface Path extends RouteProps {
    isPrivate?: boolean,
}

export const paths: Path[] = [
    {
        path: '/home',
        component: HomePage,
        exact: false,
        isPrivate: false,
    },
    {
        path: ['/', '/clouds'],
        component: CloudsPage,
        exact: true,
        isPrivate: false,
    },
];
