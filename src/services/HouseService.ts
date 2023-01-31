import $api from "../http";
import {AxiosResponse} from "axios";
import IHouse from "../models/IHouse";

export default class HouseService {
    static async getHouses(): Promise<AxiosResponse<IHouse[]>> {
        return $api.get<IHouse[]>('/api/v1/houses/client/get')
    }
    static async addHouse(house: FormData): Promise<AxiosResponse<IHouse>> {
        return $api.post<IHouse>('/api/v1/houses/client/add', house)
    }
}
