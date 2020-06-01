console.log("axios.ts");
import axios, { AxiosInstance } from "axios";
export default class Axios {
    public ajax: AxiosInstance = undefined;
    constructor() { 
        this.ajax = axios.create({
            baseURL: "https://127.0.0.1:3000/api"
        })
    }
}