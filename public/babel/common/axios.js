"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("axios.ts");

var Axios = function Axios() {
  _classCallCheck(this, Axios);

  this.ajax = undefined;
  this.ajax = _axios["default"].create({
    baseURL: "https://127.0.0.1:3000/api"
  });
};

exports["default"] = Axios;