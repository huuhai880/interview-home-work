const express = require('express')
const userController = require('./user.controller')
const routes = express.Router()
const prefix = '/user'

// get list user
routes.route('')
  .get(userController.getList)

//add
routes.route('/add-user')
  .post(userController.add)

//get detail
routes.route('/detail')
  .get(userController.detail)

//delete
routes.route('/delete')
  .post(userController.deleteuser)


module.exports = {
    prefix,
    routes
};
