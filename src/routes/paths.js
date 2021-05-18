import HomePage from '../pages/home';
import CloudsPage from '../pages/clouds';

// TODO: Use private routes for private pages after add authentication

export const paths = [
  {
    key: 1,
    path: '/',
    component: HomePage,
    exact: true,
    isPrivate: false,
  },
  {
    key: 1,
    path: '/clouds',
    component: CloudsPage,
    exact: false,
    isPrivate: false,
  },
];
