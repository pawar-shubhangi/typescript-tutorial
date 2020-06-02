import Axios from "../common/axios";

class AxiosConfig extends Axios {
    constructor() {
        super();
    }
    getName(name: string): string {
        return `Hello, ${name}`;
    }
}

const axiosConfig: AxiosConfig = new AxiosConfig(); // instance created using new operator

export default axiosConfig;
export { AxiosConfig };