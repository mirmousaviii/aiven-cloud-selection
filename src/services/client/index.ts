import {HttpClient} from '../../utils/http-client';

export const MainServer = new HttpClient(process.env.REACT_APP_BASE_URL as string);
