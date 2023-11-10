const httpStatus = require('http-status')
const bcrypt = require('bcryptjs')
const ServiceResponse = require('../../common/responses/service.response')
const logger = require('../../common/classes/logger.class')
const { pool } = require("../../sql");


const ErrorResponse = require('../../common/responses/error.response')
const RESPONSE_MSG = require('../../common/const/responseMsg.const')


const add = async (bodyParams = {}) => {
    try {

        const password = bcrypt.hashSync("user@123", 10)

        let user = []

        if (user && user?.length > 0 && user[0].RESULT) {

            return new ServiceResponse(true, RESPONSE_MSG.REQUEST_SUCCESS, user)
        }

        return new ServiceResponse(false, RESPONSE_MSG.REQUEST_FAILED)
    } catch (error) {
        logger.error(error, {
            function: 'userService.detail'
        })
        return new ErrorResponse(httpStatus.NOT_IMPLEMENTED, error, RESPONSE_MSG.REQUEST_FAILED)
    }
}

const detail = async (queryParams = {}) => {
    try {   

        const res = await pool.query(`SELECT * FROM users where user_name ='${queryParams?.user_name}'`);
    
        const detail = res.rows

        if (detail && detail.length > 0) {

            return new ServiceResponse(true, RESPONSE_MSG.REQUEST_SUCCESS, res.rows[0])
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

    add,
    detail,

}
