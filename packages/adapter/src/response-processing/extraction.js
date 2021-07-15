"use strict";
exports.__esModule = true;
exports.extractAndEncodeResponse = exports.extractValue = exports.getRawValue = void 0;
var bignumber_js_1 = require("bignumber.js");
var isUndefined = require("lodash/isUndefined");
var casting = require("./casting");
var encoding = require("./encoding");
function getRawValue(data, path, defaultValue) {
    // Some APIs return a simple value not in an object or array, like
    // a string, number or boolean. If this is the case, the user can
    // choose to omit the path which means that the adapter does not
    // need to do any "extraction".
    if (!path) {
        return data;
    }
    // We could use lodash#get, but it's slow and we want to control the
    // exact behaviour ourselves.
    return path.split('.').reduce(function (acc, segment) {
        // eslint-disable-next-line functional/no-try-statement
        try {
            var nextValue = acc[segment];
            return nextValue === undefined ? defaultValue : nextValue;
        }
        catch (e) {
            return defaultValue;
        }
    }, data);
}
exports.getRawValue = getRawValue;
function extractValue(data, path) {
    var rawValue = getRawValue(data, path);
    if (isUndefined(rawValue)) {
        throw new Error("Unable to find value from path: '" + path + "'");
    }
    return rawValue;
}
exports.extractValue = extractValue;
function extractAndEncodeResponse(data, parameters) {
    var rawValue = extractValue(data, parameters._path);
    var value = casting.castValue(rawValue, parameters._type);
    if ((parameters._type === 'uint256' || parameters._type === 'int256') && value instanceof bignumber_js_1.BigNumber) {
        var multipledValue = casting.multiplyValue(value, parameters._times);
        var encodedValue_1 = encoding.encodeValue(multipledValue.toString(), parameters._type);
        return { value: multipledValue, encodedValue: encodedValue_1 };
    }
    var encodedValue = encoding.encodeValue(value, parameters._type);
    return { value: value, encodedValue: encodedValue };
}
exports.extractAndEncodeResponse = extractAndEncodeResponse;
