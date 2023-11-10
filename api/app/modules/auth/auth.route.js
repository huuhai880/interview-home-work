const express = require('express');
const authController = require('./auth.controller');
const routes = express.Router();
const prefix = '/auth';

routes.route('/token')
    .post(authController.createToken);

routes.route('/refresh-token')
    .post(authController.refreshToken);

module.exports = {
    prefix,
    routes,
};
