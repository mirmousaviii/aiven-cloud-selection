import {MainServer} from '../client';
import {Cloud} from "../../types/cloud";

interface CloudResponse {
    clouds: Cloud[]
}

export const GetClouds = (perPage: number = 20) =>
    MainServer.request<CloudResponse, { per_page: number }>(
        'GET',
        `clouds`,
        {per_page: perPage}
    );