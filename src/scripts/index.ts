import axiosConfig, { AxiosConfig } from "../lib/axios-config";
$(document).ready(function () {
    var nm: string = axiosConfig.getName("Shubhangi");
    console.log(nm);
    var ac: AxiosConfig = new AxiosConfig();
    var name: string = ac.getName("Yogesh");
    console.log(name);
});