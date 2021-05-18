import {MainServer} from '../client';

export const GetClouds = () =>
    MainServer.request(
        'GET',
        `clouds`,
    );