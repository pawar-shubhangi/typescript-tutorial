import Axios from "../common/axios";
class AxiosConfig extends Axios {
    constructor() {
        super();
        this.getName = function (name) {
            return `Hello, ${name}`;
        };
    }
}
const axiosConfig = new AxiosConfig(); // instance created using new operator
export default axiosConfig;
export { AxiosConfig };
