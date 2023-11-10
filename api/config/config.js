const config = {
    appName: 'API INTERVIEW',
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3001,
    runLocal: process.env.RUN_LOCAL === 'yes',
    testing: process.env.UNIT_TESTING === 'yes',
    appWelcome: process.env.APP_WELCOME,
    appUrl: process.env.APP_URL,
    hashSecretKey: "interview@50612596",
    token: {
        key: 'Authorization',
        type: 'Bearer',
    },
    
};

module.exports = config;

