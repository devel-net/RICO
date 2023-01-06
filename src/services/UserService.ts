import IUser from "../models/IUser";
import {AxiosResponse} from "axios";
import $api from "../http";

export default class UserService{
    static async getClient(): Promise<AxiosResponse<IUser>> {
        return $api.get<IUser>('/api/v1/client/get')
    }

    static async changePassword(old_password: string, new_password: string): Promise<AxiosResponse<IUser>> {
        return $api.post<IUser>('/api/v1/client/change-password/', {old_password, new_password})
    }
}
