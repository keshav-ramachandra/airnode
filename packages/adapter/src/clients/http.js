"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.post = exports.get = void 0;
var axios_1 = require("axios");
function execute(config) {
    return axios_1["default"]({
        url: config.url,
        method: config.method,
        headers: config.headers,
        data: config.data,
        params: config.params,
        timeout: config.timeout
    });
}
function get(request, config) {
    return execute(__assign(__assign({}, request), { url: "" + request.baseUrl + request.path, method: 'get', params: request.data, data: undefined, timeout: config === null || config === void 0 ? void 0 : config.timeout }));
}
exports.get = get;
function post(request, config, raw) {
    switch (raw) {
        case true:
            return execute(__assign(__assign({}, request), { url: "" + request.baseUrl + request.path, method: 'post', data: request.data.data, timeout: config === null || config === void 0 ? void 0 : config.timeout }));
        default:
            return execute(__assign(__assign({}, request), { url: "" + request.baseUrl + request.path, method: 'post', data: request.data, timeout: config === null || config === void 0 ? void 0 : config.timeout }));
    }
}
exports.post = post;
