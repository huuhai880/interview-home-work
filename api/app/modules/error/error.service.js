const ServiceResponse = require('../../common/responses/service.response');

const createError = async (params = {}) => {
  try {
    
    
    return new ServiceResponse(true);
  } catch (e) {
    
    return new ServiceResponse(false, e.message);
  }
};

module.exports = {
  createError,
};
