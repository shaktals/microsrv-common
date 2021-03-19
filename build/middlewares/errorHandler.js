"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var CustomError_1 = require("../errors/CustomError");
var errorHandler = function (err, req, res, next) {
    if (err instanceof CustomError_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    var customError = [{ message: 'Something went wrong' }];
    console.error(err);
    res.status(400).send({ errors: customError });
};
exports.errorHandler = errorHandler;
