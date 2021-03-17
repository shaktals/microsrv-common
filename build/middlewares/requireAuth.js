"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var NotAuthorizedError_1 = require("../errors/NotAuthorizedError");
var requireAuth = function (req, res, next) {
    if (!req.currentUser) {
        throw new NotAuthorizedError_1.NotAuthorizedError();
    }
    next();
};
exports.requireAuth = requireAuth;
