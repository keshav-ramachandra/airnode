"use strict";
exports.__esModule = true;
exports.buildAndExecuteRequest = exports.executeRequest = void 0;
var build_request_1 = require("./build-request");
var http = require("../clients/http");
function executeRequest(request, config, raw) {
    switch (request.method) {
        case 'get':
            return http.get(request, config);
        case 'post':
            console.log("posr req", request);
            return http.post(request, config, raw);
    }
}
exports.executeRequest = executeRequest;
function buildAndExecuteRequest(options, config, raw) {
    var request = build_request_1.buildRequest(options);
    //console.log("request is", request);
    return executeRequest(request, config, raw);
}
exports.buildAndExecuteRequest = buildAndExecuteRequest;
