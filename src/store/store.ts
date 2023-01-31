import IUser from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";

import UserService from "../services/UserService";
import HouseService from "../services/HouseService";
import IHouse from "../models/IHouse";

export default class Store {

    user: IUser | null = null;
    houses: IHouse[] = [];
    isAuth = !!localStorage.getItem('token');
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setIsLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setHouses(houses: IHouse[]) {
        this.houses = houses;
    }

    async withLoading<T>(promise: Promise<T>): Promise<T> {
        try {
            this.setIsLoading(true);
            return await promise;
        } finally {
            this.setIsLoading(false);
        }
    }

    async registration(name: string, email: string, phone:string, password: string, know_about_us: string) {
        try {
            return await this.withLoading(AuthService.registration(name, email, phone, password, know_about_us));
        } catch (e) {
            console.log(e);
        }
    }

    async login(email: string, password: string) {
        try {
            const response = await this.withLoading(AuthService.login(email, password));
            localStorage.setItem('token', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            this.setAuth(true);
            console.log(this.isAuth)
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            await this.withLoading(AuthService.logout());
            this.setAuth(false);
        } catch (e) {
            console.log(e);
        }
    }

    async getClient() {
        try {
            const response = await this.withLoading(UserService.getClient());
            console.log(response);
            this.setUser(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    // Домівки
    async getHouses() {
        try {
            const response = await this.withLoading(HouseService.getHouses());
            // @ts-ignore
            this.setHouses(response.data.results);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    async addHouse(house: FormData) {
        try {
            const response = await this.withLoading(HouseService.addHouse(house));
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }
}
