"use strict";
exports.__esModule = true;
exports.encodeValue = exports.convertBoolToBytes32 = exports.convertStringToBytes32 = exports.convertSignedIntegerToBytes32 = exports.convertUnsignedIntegerToBytes32 = void 0;
var ethers_1 = require("ethers");
function convertUnsignedIntegerToBytes32(value) {
    return ethers_1.ethers.utils.defaultAbiCoder.encode(['uint256'], [value]);
}
exports.convertUnsignedIntegerToBytes32 = convertUnsignedIntegerToBytes32;
function convertSignedIntegerToBytes32(value) {
    return ethers_1.ethers.utils.defaultAbiCoder.encode(['int256'], [value]);
}
exports.convertSignedIntegerToBytes32 = convertSignedIntegerToBytes32;
function trimValue(value) {
    // We can't encode strings longer than 31 characters to bytes32.
    // Ethers need to keep room for null termination
    return value.length > 31 ? value.substring(0, 31) : value;
}
function convertStringToBytes32(value) {
    var trimmedValue = trimValue(value);
    var bytes32String = ethers_1.ethers.utils.formatBytes32String(trimmedValue);
    return ethers_1.ethers.utils.defaultAbiCoder.encode(['bytes32'], [bytes32String]);
}
exports.convertStringToBytes32 = convertStringToBytes32;
function convertBoolToBytes32(value) {
    return ethers_1.ethers.utils.defaultAbiCoder.encode(['bool'], [value]);
}
exports.convertBoolToBytes32 = convertBoolToBytes32;
function encodeValue(value, type) {
    switch (type) {
        case 'uint256':
            return convertUnsignedIntegerToBytes32(value);
        case 'int256':
            return convertSignedIntegerToBytes32(value);
        case 'bool':
            return convertBoolToBytes32(value);
        case 'bytes32':
            return convertStringToBytes32(value);
    }
}
exports.encodeValue = encodeValue;
