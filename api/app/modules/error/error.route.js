const express = require('express');

const routes = express.Router();

const prefix = '/error';

module.exports = {
  prefix,
  routes,
};
