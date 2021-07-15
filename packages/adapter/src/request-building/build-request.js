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
exports.buildRequest = void 0;
var parameters_1 = require("./parameters");
var path_parser_1 = require("./path-parser");
function cacheRequestOptions(options) {
    var ois = options.ois;
    var endpoint = ois.endpoints.find(function (e) { return e.name === options.endpointName; });
    if (!endpoint) {
        throw new Error("Endpoint: '" + options.endpointName + "' not found in the OIS.");
    }
    var _a = endpoint.operation, method = _a.method, path = _a.path;
    var operation = ois.apiSpecifications.paths[path][method];
    //console.log({ ...options, endpoint, operation });
    return __assign(__assign({}, options), { endpoint: endpoint, operation: operation });
}
function buildRequest(options) {
    var ois = options.ois;
    var cachedOptions = cacheRequestOptions(options);
    var endpoint = cachedOptions.endpoint;
    console.log("end point is", endpoint);
    // A single base URL should always exist at the API level
    // Different base URLs are not supported at the operation level
    var baseUrl = ois.apiSpecifications.servers[0].url;
    var parameters = parameters_1.buildParameters(cachedOptions);
    var path = path_parser_1.parsePathWithParameters(endpoint.operation.path, parameters.paths);
    console.log("base url is ", baseUrl);
    console.log("path is ", path);
    console.log("method is ", endpoint.operation.method);
    console.log("headers are ", parameters.headers);
    console.log("data is ", parameters.query);
    return {
        baseUrl: baseUrl,
        path: path,
        method: endpoint.operation.method,
        headers: parameters.headers,
        data: parameters.query
    };
}
exports.buildRequest = buildRequest;
