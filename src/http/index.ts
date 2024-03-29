import axios from 'axios';
import RefreshTokenResponse from "../models/response/RefreshTokenResponse";

export const API_URL = 'https://api.rico.app';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    // config.xsrfCookieName = 'XSRF-TOKEN';
    // config.xsrfHeaderName = 'X-XSRF-TOKEN';
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api.interceptors.response.use( (config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try{
            const response = await axios.post<RefreshTokenResponse>(`${API_URL}/api/v1/authorization/token/refresh/`, {refresh: localStorage.getItem('refresh')});
            localStorage.setItem('token', response.data.access);
            return $api.request(originalRequest);
        }
        catch (e) {
            console.log('Not authorized!')
        }
    }
    console.log(error);
    return Promise.reject(error);
});

export default $api;
