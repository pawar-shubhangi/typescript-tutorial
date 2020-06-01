console.log("axios.ts");
import axios from "axios";
export default class Axios {
    constructor() {
        this.ajax = undefined;
        this.ajax = axios.create({
            baseURL: "https://127.0.0.1:3000/api"
        });
    }
}
