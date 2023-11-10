const express = require('express')
const postController = require('./post.controller')
const routes = express.Router()
const prefix = '/post'

routes.route('')
  .get(postController.getList)

//add
routes.route('/add-post')
  .post(postController.add)


module.exports = {
    prefix,
    routes
};
