const httpStatus = require('http-status')
const bcrypt = require('bcryptjs')
const SingleResponse = require('../../common/responses/single.response')
const ErrorResponse = require('../../common/responses/error.response')
const RESPONSE_MSG = require('../../common/const/responseMsg.const')
const stringHelper = require("../../common/helpers/string.helper")
const logger = require('../../common/classes/logger.class')
const userService = require('../user/user.service')
const authService = require('./auth.service')

const createToken = async (req, res, next) => {
    try {
        const { user_name, password, remember = false } = req.body
        const lcUsername = stringHelper.toLowerCaseString(user_name)
        
        const account = (await userService.detail({ user_name: lcUsername })).getData()

        if (!account || !bcrypt.compareSync(password, account.password)) {
            return next(new ErrorResponse(httpStatus.BAD_REQUEST, null, 'Tài khoản hoặc mật khẩu không đúng.'))
        }
        const tokenData = await authService.generateToken(account, remember);

        return res.json(new SingleResponse({ data: { ...tokenData, userData: account } }, RESPONSE_MSG.AUTH.LOGIN.SUCCESS))
    } catch (error) {
        logger.error(error, {
            function: 'auth.controller.js.createToken'
        })
        return next(new ErrorResponse(httpStatus.NOT_IMPLEMENTED, error, RESPONSE_MSG.REQUEST_FAILED))
    }
}

const refreshToken = async (req, res, next) => {
    try {
        const { refreshToken, remember = false } = req.body

        const tokenData = await authService.refreshToken(refreshToken, remember)

        if (tokenData.error) {
            logger.error(error, {
                function: 'auth.controller.js.refreshToken'
            })
            return next(
                new ErrorResponse(
                    httpStatus.BAD_REQUEST,
                    tokenData.error,
                    RESPONSE_MSG.AUTH.LOGIN.REFRESH_TOKEN_FAILED
                )
            )
        }
        return res.json(new SingleResponse(tokenData, RESPONSE_MSG.REQUEST_SUCCESS))
    } catch (error) {

        logger.error(error, {
            function: 'auth.controller.js.refreshToken'
        })
        return next(new ErrorResponse(httpStatus.NOT_IMPLEMENTED, error, RESPONSE_MSG.REQUEST_FAILED))
    }
}

module.exports = {
    createToken,
    refreshToken
}
