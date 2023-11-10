const postService = require('./post.service')
const SingleResponse = require('../../common/responses/single.response')
const RESPONSE_MSG = require('../../common/const/responseMsg.const')
const httpStatus = require('http-status')
const ErrorResponse = require('../../common/responses/error.response')

const getList = async (req, res, next) => {
    try {
        const serviceRes = await postService.getList(req.query)

        if (serviceRes.isFailed()) {
            return next(serviceRes)
        }
        return res.json(new SingleResponse(serviceRes.getData()))
    } catch (error) {

        return next(new ErrorResponse(httpStatus.NOT_IMPLEMENTED, error, RESPONSE_MSG.REQUEST_FAILED))

    }
}

const add = async (req, res, next) => {
    try {

        const serviceRes = await postService.add(req.body)

        if (serviceRes.isFailed()) {
            return next(serviceRes)
        }
        return res.json(new SingleResponse(serviceRes.getData()))
    } catch (error) {
        return next(new ErrorResponse(httpStatus.NOT_IMPLEMENTED, error, RESPONSE_MSG.REQUEST_FAILED))
    }
}

module.exports = {
    getList,
    add,
}
