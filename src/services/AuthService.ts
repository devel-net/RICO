import $api, {API_URL} from "../http";
import axios, {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import IUser from "../models/IUser";
export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axios.post<AuthResponse>(`${API_URL}/api/v1/authorization/login/`, {username, password})
            .then(response => {
                localStorage.setItem('token', response.data.access);
                return response;
            });
    }

    static async registration(first_name: string, email: string, phone:string, password: string, know_about_us: string): Promise<AxiosResponse<IUser>> {
        return axios.post(`${API_URL}/api/v1/authorization/register/client/`, {first_name, email, phone, password, know_about_us, headers: { 'Authorization': '' }})
    }

    static async logout(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/v1/authorization/logout/', {refresh: localStorage.getItem('refresh')})
            .then(response => {
                localStorage.removeItem('token');
                localStorage.removeItem('refresh');
                console.log(response);
                return response;
            });
    }


}
