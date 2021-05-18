import axios from 'axios';

export class HttpClient {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._headers = {};
  }

  setHeader(key, value) {
    this._headers = {...this._headers, [key]: value};
    return this;
  }

  removeHeader(key) {
    delete this._headers[key];
  }

  request(method, url, params, data, headers) {
    return axios.request({
      baseURL: this._baseUrl,
      method,
      url,
      params,
      data,
      headers: {...this._headers, ...headers},
    });
  }
}
