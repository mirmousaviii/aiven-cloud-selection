import HomePage from '../pages/home';

// TODO: Use private routes for private pages after add authentication

export const paths = [
  {
    key: 1,
    path: '/',
    component: HomePage,
    exact: true,
    isPrivate: false,
  },
];
