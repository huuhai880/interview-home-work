const SingleResponse = require('../../common/responses/single.response');

const getOptions = async (req, res, next) => {
  try {
    const serviceRes =null

    return res.json(new SingleResponse(serviceRes.getData()));
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getOptions,
};
