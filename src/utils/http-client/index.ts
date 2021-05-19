import axios from 'axios';

type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export class HttpClient {
    _baseUrl: string;
    _headers: AnyObject;

    constructor(baseUrl: string) {
        this._baseUrl = baseUrl;
        this._headers = {};
    }

    setHeader(key: string, value: string) {
        this._headers = {...this._headers, [key]: value};
        return this;
    }

    removeHeader(key: string) {
        delete this._headers[key];
    }

    request<R, P = undefined, D = undefined, H = undefined>(
        method: Method,
        url: string,
        params?: P,
        data?: D,
        headers?: H
    ) {
        return axios.request<R>({
            baseURL: this._baseUrl,
            method,
            url,
            params,
            data,
            headers: {...this._headers, ...headers},
        });
    }
}