const httpStatus = require('http-status')
const bcrypt = require('bcryptjs')
const ServiceResponse = require('../../common/responses/service.response')
const logger = require('../../common/classes/logger.class')
const { pool } = require("../../sql");


const ErrorResponse = require('../../common/responses/error.response')
const RESPONSE_MSG = require('../../common/const/responseMsg.const')


const getList = async (queryParams = {}) => {
    try {

        const { page = 1, limt = 25 } = queryParams

        // thay đổi viết bằng store procedue nếu có time
        const res = await pool.query("SELECT title, content FROM post");

        if (res?.rows) {

            return new ServiceResponse(true, RESPONSE_MSG.REQUEST_SUCCESS, res?.rows)
        }

        return new ServiceResponse(false, RESPONSE_MSG.REQUEST_FAILED)
    } catch (error) {
        logger.error(error, {
            function: 'userService.detail'
        })
        return new ErrorResponse(httpStatus.NOT_IMPLEMENTED, error, RESPONSE_MSG.REQUEST_FAILED)
    }
}

const add = async (bodyParams = {}) => {
    try {

        const { title, post_content, auth_name } = bodyParams

        // thay đổi viết bằng store procedue nếu có time
        const res = await pool.query(
            "INSERT INTO post (title, content, user_name) VALUES ($1, $2, $3)",
            [title, post_content, auth_name]
        );

        if (res?.rowCount > 0) {

            return new ServiceResponse(true, RESPONSE_MSG.REQUEST_SUCCESS)
        }

        return new ServiceResponse(false, RESPONSE_MSG.REQUEST_FAILED)
    } catch (error) {
        logger.error(error, {
            function: 'userService.detail'
        })
        return new ErrorResponse(httpStatus.NOT_IMPLEMENTED, error, RESPONSE_MSG.REQUEST_FAILED)
    }
}

module.exports = {
    getList,
    add
}
