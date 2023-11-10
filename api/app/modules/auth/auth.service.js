const moment = require('moment');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const config = require('../../../config/config');
const RESPONSE_MSG = require('../../common/const/responseMsg.const');
const userService = require('../user/user.service');

const TOKEN_EXPIRE_AFTER = 3600; // expires in 1 hour
const REFRESH_TOKEN_EXPIRE_AFTER = 86400; // expires in 24 hours


const generateToken = async (account, remember = false) => {
    try {

        const data = {
            token_id: uuidv4(),
            id: account.id,
            user_name: account.user_name
        };
        
        const token = jwt.sign(data, config.hashSecretKey, {
            expiresIn: TOKEN_EXPIRE_AFTER,
        });
        const refreshToken = jwt.sign(data, config.hashSecretKey, {
            expiresIn: remember ? REFRESH_TOKEN_EXPIRE_AFTER * 365 : REFRESH_TOKEN_EXPIRE_AFTER,
        });

        return {
            tokenKey: config.token.key,
            tokenType: config.token.type,
            accessToken: token,
            tokenExpireAt: moment()
                .add(TOKEN_EXPIRE_AFTER, 's')
                .seconds(0)
                .utc()
                .valueOf(),
            refreshToken: refreshToken,
            refreshTokenExpireAt: moment()
                .add(REFRESH_TOKEN_EXPIRE_AFTER, 's')
                .seconds(0)
                .utc()
                .valueOf(),
        };
    } catch (error) {
        console.error("auth.service.generateToken", error);
        return null;
    }
};

const refreshToken = async (refreshToken, remember = false) => {
    try {
        return jwt.verify(
            refreshToken,
            config.hashSecretKey,
            async (err, decoded) => {
                if (err) {
                    throw err;
                }
                const account = (await userService.detail(decoded)).getData() || null;
                if (!account) {
                    throw RESPONSE_MSG.NOT_FOUND;
                }
                return await generateToken(account, remember);
            }
        );
    } catch (error) {
        
        console.error("auth.service.refreshToken", error);
        return null;
    }
};

module.exports = {
    generateToken,
    refreshToken,
};
