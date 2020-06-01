import axiosConfig, { AxiosConfig } from "../lib/axios-config";
$(document).ready(function () {
    var nm = axiosConfig.getName("Shubhangi");
    console.log(nm);
    var ac = new AxiosConfig();
    var name = ac.getName("Yogesh");
    console.log(name);
});
